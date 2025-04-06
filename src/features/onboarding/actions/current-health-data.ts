'use server'

import { createClient } from '@/utils/supabase/server'
import { unauthorized } from 'next/navigation'
import {
	CurrentHealthDataDto,
	CurrentHealthDataDtoSchema,
} from '../dtos/current-health.dto'

export const saveCurrentHealthDataAction = async (
	dto: CurrentHealthDataDto
) => {
	const supabase = await createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const { data, error: parseError } = CurrentHealthDataDtoSchema.safeParse(dto)

	if (parseError) {
		throw parseError
	}

	const { error } = await supabase
		.from('users')
		.update([
			{
				blood_pressure: {
					systolic: data.bloodPressure.systolic,
					diastolic: data.bloodPressure.diastolic,
				},
				heart_rate: data.heartRate,
				water_intake: data.waterIntake,
				sleep_hours: data.sleepHours,
				steps: data.steps,
				onboarding_finished: true,
			},
		])
		.eq('id', user.id)

	if (error) {
		throw new Error(error.message)
	}
}
