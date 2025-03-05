import { Button } from '@/ui/form/Button'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Heading } from '@/ui/typography/Heading'
import Link from 'next/link'

export function SigninForm() {
	return (
		<div className='flex flex-col items-center mx-auto gap-5 max-w-[28rem]'>
			<Heading>Sign in</Heading>
			<form className='w-full flex flex-col gap-4'>
				<Field>
					<Label>Email</Label>
					<Input type='email' />
				</Field>
				<Field>
					<Label>Password</Label>
					<Input type='password' />
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
