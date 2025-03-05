import { HeartPulse } from 'lucide-react'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-screen flex items-center justify-center flex-col gap-5 container '>
			<HeartPulse className='text-red-400 w-12 h-12 animate-pulse' />
			<div className='w-full'>{children}</div>
		</div>
	)
}
