import { Button } from '@/ui/form/Button'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Heading } from '@/ui/typography/Heading'
import Link from 'next/link'

export function SignupForm() {
	return (
		<div className='flex flex-col items-center mx-auto gap-5 max-w-[28rem] '>
			<Heading>Sign up</Heading>
			<form className='w-full flex flex-col gap-4'>
				<Field>
					<Label>Email</Label>
					<Input type='email' />
				</Field>
				<Field>
					<Label>Password</Label>
					<Input type='password' />
				</Field>
				<Field>
					<Label>Confirm Password</Label>
					<Input type='password' />
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
