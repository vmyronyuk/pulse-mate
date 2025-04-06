import { NewHealthDataDto } from './new-health-data.dto'

type BloodPressureDto = {
	systolic: string
	diastolic: string
}

export type UserHistoricDataDto = {
	historic_health_data: NewHealthDataDto[]
}

export type UserDto = {
	firstName: string
	lastName: string
	dateOfBirth: string
	height: string
	weight: string
	gender: string
	activityLevel: string
	healthGoal: string
	bloodPressure: BloodPressureDto
	heartRate: string
	waterIntake: string
	sleepHours: string
	steps?: string
	historic_health_data: NewHealthDataDto[]
	lastHealthUpdate: string
	onboardingFinished: boolean
}
