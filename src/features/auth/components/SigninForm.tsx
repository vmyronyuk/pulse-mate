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
import { SigninDto, SigninDtoType } from '../dtos/signin.dto'

export function SigninForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SigninDtoType>({
		resolver: zodResolver(SigninDto),
		mode: 'onChange',
		defaultValues: { email: '', password: '' },
	})

	const onSubmit = (data: SigninDtoType) => {
		console.log(data)
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
					<Input type='email' {...register('email')} />
					<Error error={errors.email} />
				</Field>
				<Field>
					<Label>Password</Label>
					<Input type='password' {...register('password')} />
					<Error error={errors.password} />
				</Field>
				<Button>Sign In</Button>
			</form>
			<p className='text-sm'>
				Don&apos;t have an account?{' '}
				<Link href='/auth/signup' className='text-red-400 underline'>
					Sign up
				</Link>
			</p>
		</div>
	)
}
