'use client'

import { Button } from '@/ui/button'
import { Error } from '@/ui/form/Error'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Heading } from '@/ui/typography/Heading'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { signupAction } from '../actions/signup'
import { SignupDto, SignupDtoSchema } from '../dtos/signup.dto'

export function SignupForm() {
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupDto>({
		resolver: zodResolver(SignupDtoSchema),
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = async (data: SignupDto) => {
		setLoading(true)

		try {
			await signupAction(data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex flex-col items-center mx-auto gap-5 max-w-[28rem] '>
			<Heading>Sign up</Heading>
			<form
				className='w-full flex flex-col gap-4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Field>
					<Label>Email</Label>
					<Input
						type='email'
						{...register('email')}
						placeholder='example@gmail.com'
					/>
					<Error error={errors.email} />
				</Field>
				<Field>
					<Label>Password</Label>
					<Input
						type='password'
						{...register('password')}
						placeholder='Password'
					/>
					<Error error={errors.password} />
				</Field>
				<Field>
					<Label>Confirm Password</Label>
					<Input
						type='password'
						{...register('confirmPassword')}
						placeholder='Confirm Password'
					/>
					<Error error={errors.confirmPassword} />
				</Field>
				<Button loading={loading}>Sign Up</Button>
			</form>
			<p className='text-sm'>
				Already have an account?{' '}
				<Link href='/auth/signin' className='text-primary underline'>
					Sign in
				</Link>
			</p>
		</div>
	)
}
