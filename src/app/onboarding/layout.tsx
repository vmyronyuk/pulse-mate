import { HeartPulse } from 'lucide-react'

export default function OnboardingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-screen flex items-center justify-center flex-col gap-3'>
			<div className='flex justify-center'>
				<HeartPulse className='text-red-400 w-12 h-12' />
			</div>
			<div className='max-w-md'>{children}</div>
		</div>
	)
}
