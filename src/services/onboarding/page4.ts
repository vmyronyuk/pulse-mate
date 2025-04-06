// import { CurrentHealthDataDtoType } from '@/features/onboarding/dtos/current-health.dto'
// import { unauthorized } from 'next/navigation'

// export const saveCurrentHealthData = async (data: CurrentHealthDataDtoType) => {
// 	const {
// 		data: { user },
// 	} = await supabase.auth.getUser()

// 	if (!user) {
// 		unauthorized()
// 	}

// 	const {
// 		bloodPressure,
// 		heartRate,
// 		currentWeight,
// 		waterIntake,
// 		sleepHours,
// 		bloodSugar,
// 	} = data

// 	const { error: userDataError } = await supabase
// 		.from('users')
// 		.update({
// 			blood_pressure: bloodPressure,
// 			heart_rate: heartRate,
// 			current_weight: currentWeight,
// 			water_intake: waterIntake,
// 			sleep_hours: sleepHours,
// 			blood_sugar: bloodSugar,
// 		})
// 		.eq('id', user.id)

// 	if (userDataError) {
// 		throw new Error(userDataError.message)
// 	}

// 	return true
// }
