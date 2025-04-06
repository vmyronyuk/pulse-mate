'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { unauthorized } from 'next/navigation'
import { getUserHistoricData } from '../dal/user-historic-data'
import {
	NewHealthDataDto,
	NewHealthDataDtoSchema,
} from '../dtos/new-health-data.dto'
import { UserHistoricDataDto } from '../dtos/user.dto'

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

	const userHistoricData: UserHistoricDataDto | null =
		await getUserHistoricData()

	const existingHistoricData = userHistoricData?.historic_health_data ?? []
	const updatedHistoricData = [...existingHistoricData, data]

	const updateData: any = {
		historic_health_data: updatedHistoricData,
	}

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

	const { error } = await supabase
		.from('users')
		.update(updateData)
		.eq('id', user.id)

	revalidatePath('/dashboard')

	if (error) {
		throw new Error(error.message)
	}
}
