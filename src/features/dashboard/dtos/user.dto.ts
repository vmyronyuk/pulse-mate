type BloodPressureDto = {
	systolic: string
	diastolic: string
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
	onboardingFinished: boolean
}
