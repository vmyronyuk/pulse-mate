import { z } from 'zod'

export const CurrentHealthDataDto = z.object({
	bloodPressure: z.object({
		systolic: z.string().min(1, 'Systolic is required'),
		diastolic: z.string().min(1, 'Diastolic is required'),
	}),
	heartRate: z.string().min(1, 'Heart rate is required'),
	currentWeight: z.string().min(1, 'Current weight is required'),
	waterIntake: z.string().min(1, 'Water intake is required'),
	sleepHours: z.string().min(1, 'Sleep hours are required'),
	steps: z.string().optional(),
})

export type CurrentHealthDataDtoType = z.infer<typeof CurrentHealthDataDto>
