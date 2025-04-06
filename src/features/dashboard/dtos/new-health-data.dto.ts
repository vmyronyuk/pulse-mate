import { z } from 'zod'

export const NewHealthDataDtoSchema = z
	.object({
		date: z.coerce.date(),
		heartRate: z.string().optional(),
		bloodPressure: z.object({
			systolic: z.string().optional(),
			diastolic: z.string().optional(),
		}),
		weight: z.string().optional(),
		steps: z.string().optional(),
		waterIntake: z.string().optional(),
		sleepHours: z.string().optional(),
		notes: z.string().optional(),
	})
	.refine(
		data => {
			return (
				data.heartRate ||
				data.bloodPressure?.systolic ||
				data.bloodPressure?.diastolic ||
				data.weight ||
				data.steps ||
				data.waterIntake ||
				data.sleepHours
			)
		},
		{
			message: 'At least one field must be filled',
			path: ['notes'],
		}
	)

export type NewHealthDataDto = z.infer<typeof NewHealthDataDtoSchema>
