import { createClient } from '@/utils/supabase/server'
import { unauthorized } from 'next/navigation'
import { UserDto } from '../dtos/user.dto'

export const getCurrentUserData = async (): Promise<UserDto | null> => {
	const supabase = await createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const { data, error } = await supabase
		.from('users')
		.select()
		.eq('id', user.id)
		.single()

	if (error) {
		console.error('Error fetching user data:', error)
	}

	if (data) {
		const userDto: UserDto = {
			firstName: data.first_name,
			lastName: data.last_name,
			dateOfBirth: data.date_of_birth,
			height: data.height,
			weight: data.weight,
			gender: data.gender,
			activityLevel: data.activity_level,
			healthGoal: data.health_goal,
			bloodPressure: {
				systolic: data.blood_pressure.systolic,
				diastolic: data.blood_pressure.diastolic,
			},
			heartRate: data.heart_rate,
			sleepHours: data.sleep_hours,
			waterIntake: data.water_intake,
			steps: data.steps,
			lastHealthUpdate: data.last_health_update,
			onboardingFinished: data.onboarding_finished,
			historic_health_data: data.historic_health_data,
		}

		return userDto
	}

	return null
}
