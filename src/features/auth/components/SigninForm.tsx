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
import { signinAction } from '../actions/signin'
import { SigninDto, SigninDtoSchema } from '../dtos/signin.dto'

export function SigninForm() {
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SigninDto>({
		resolver: zodResolver(SigninDtoSchema),
		mode: 'onChange',
		defaultValues: { email: '', password: '' },
	})

	const onSubmit = async (data: SigninDto) => {
		setLoading(true)
		setErrorMessage(null)

		try {
			await signinAction(data)
		} catch (error: unknown) {
			if (error instanceof Error) {
				setErrorMessage(String(error))
			} else {
				setErrorMessage('An unexpected error occurred')
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex flex-col items-center mx-auto gap-5 max-w-[28rem]'>
			<Heading>Sign in</Heading>
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
				<Button loading={loading}>Sign In</Button>
			</form>
			<p className='text-sm'>
				Don&apos;t have an account?{' '}
				<Link href='/auth/signup' className='text-primary underline'>
					Sign up
				</Link>
			</p>
		</div>
	)
}
