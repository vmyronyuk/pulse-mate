import { z } from 'zod'

export const SignupDtoSchema = z
	.object({
		email: z.string().email({ message: 'Invalid email' }),
		password: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters' }),
		confirmPassword: z.string().min(8),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'The passwords did not match',
				path: ['confirmPassword'],
			})
		}
	})

export type SignupDto = z.infer<typeof SignupDtoSchema>
