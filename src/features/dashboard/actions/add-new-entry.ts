'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { unauthorized } from 'next/navigation'
import { getCurrentUserData } from '../dal/current-user-data'
import {
	NewHealthDataDto,
	NewHealthDataDtoSchema,
} from '../dtos/new-health-data.dto'
import { UserDto } from '../dtos/user.dto'

export async function addNewEntryAction(dto: NewHealthDataDto) {
	const supabase = await createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const { data, error: parseError } = NewHealthDataDtoSchema.safeParse(dto)

	if (parseError) {
		throw new Error(parseError.message)
	}

	const userData = (await getCurrentUserData()) as UserDto
	let currentLastHealthUpdate: string | null = userData.lastHealthUpdate

	if (
		currentLastHealthUpdate === 'false' ||
		isNaN(Date.parse(currentLastHealthUpdate))
	) {
		currentLastHealthUpdate = null
	} else {
		currentLastHealthUpdate = new Date(currentLastHealthUpdate).toISOString()
	}

	const parsedDate = new Date(dto.date)
	if (isNaN(parsedDate.getTime())) {
		throw new Error('Invalid date provided.')
	}

	const isUpdateToday = parsedDate.toDateString() === new Date().toDateString()

	const shouldUpdateFields =
		(currentLastHealthUpdate &&
			new Date(currentLastHealthUpdate) < parsedDate) ||
		!currentLastHealthUpdate

	const userHistoricData = userData.historic_health_data

	const updatedHistoricData = [...(userHistoricData ?? []), data]

	const updateData: any = {
		historic_health_data: updatedHistoricData,
		last_health_update: isUpdateToday
			? new Date().toISOString()
			: currentLastHealthUpdate,
	}

	if (shouldUpdateFields) {
		if (data.bloodPressure.systolic || data.bloodPressure.diastolic) {
			updateData.blood_pressure = {
				systolic: data.bloodPressure.systolic,
				diastolic: data.bloodPressure.diastolic,
			}
		}
		if (data.heartRate) updateData.heart_rate = data.heartRate
		if (data.weight) updateData.weight = data.weight
		if (data.steps) updateData.steps = data.steps
		if (data.waterIntake) updateData.water_intake = data.waterIntake
		if (data.sleepHours) updateData.sleep_hours = data.sleepHours
	}

	const { error } = await supabase
		.from('users')
		.update(updateData)
		.eq('id', user.id)

	revalidatePath('/dashboard')

	if (error) {
		console.error(error.message)
		throw new Error(error.message)
	}
}
