import { z } from 'zod'

const genderValues = ['male', 'female'] as const

const activityLevelValues = [
	'sedentary',
	'light',
	'moderate',
	'active',
] as const

const healthGoalValues = [
	'loseWeight',
	'maintain',
	'gainMuscle',
	'improveFitness',
	'other',
] as const

export const PersonalInformationDtoSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	dateOfBirth: z.string().refine(
		val => {
			const regex = /^\d{2}\/\d{2}\/\d{4}$/
			if (!regex.test(val)) return false

			const [month, day, year] = val.split('/').map(Number)
			const date = new Date(year, month - 1, day)

			return (
				date.getFullYear() === year &&
				date.getMonth() === month - 1 &&
				date.getDate() === day
			)
		},
		{ message: 'Invalid date format (MM/DD/YYYY)' }
	),
	height: z.string().min(1, 'Height is required'),
	weight: z.string().min(1, 'Weight is required'),
	gender: z.enum(genderValues, { message: 'Gender is required' }),
	activityLevel: z.enum(activityLevelValues, {
		message: 'Activity level is required',
	}),
	healthGoal: z.enum(healthGoalValues, {
		message: 'Health goal is required',
	}),
})

export type PersonalInformationDto = z.infer<
	typeof PersonalInformationDtoSchema
>
