'use client'

import { Button } from '@/ui/form/Button'
import { Error } from '@/ui/form/Error'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Heading } from '@/ui/typography/Heading'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { SignupDto, SignupDtoType } from '../dtos/signup.dto'

export function SignupForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupDtoType>({
		resolver: zodResolver(SignupDto),
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = (data: SignupDtoType) => {
		console.log(data)
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
					<Input type='email' {...register('email')} />
					<Error error={errors.email} />
				</Field>
				<Field>
					<Label>Password</Label>
					<Input type='password' {...register('password')} />
					<Error error={errors.password} />
				</Field>
				<Field>
					<Label>Confirm Password</Label>
					<Input type='password' {...register('confirmPassword')} />
					<Error error={errors.confirmPassword} />
				</Field>
				<Button>Sign Up</Button>
			</form>
			<p className='text-sm'>
				Already have an account?{' '}
				<Link href='/auth/signin' className='text-red-400 underline'>
					Sign in
				</Link>
			</p>
		</div>
	)
}
