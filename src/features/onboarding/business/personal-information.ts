import { Option } from '@/lib/types'

export const genderOptions: Option[] = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
]

export const activityLevelOptions: Option[] = [
	{ value: 'sedentary', label: 'Sedentary' },
	{ value: 'light', label: 'Light' },
	{ value: 'moderate', label: 'Moderate' },
	{ value: 'active', label: 'Active' },
]

export const healthGoalOptions: Option[] = [
	{ value: 'loseWeight', label: 'Lose Weight' },
	{ value: 'maintain', label: 'Maintain' },
	{ value: 'gainMuscle', label: 'Gain Muscle' },
	{ value: 'improveFitness', label: 'Improve Fitness' },
	{ value: 'other', label: 'Other' },
]
