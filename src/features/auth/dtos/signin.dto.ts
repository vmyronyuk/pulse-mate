import { z } from 'zod'

export const SigninDtoSchema = z.object({
	email: z.string().trim().email('Invalid email').min(1, 'Email is required'),
	password: z
		.string()
		.trim()
		.min(8, { message: 'Password must be at least 8 characters' }),
})

export type SigninDto = z.infer<typeof SigninDtoSchema>
