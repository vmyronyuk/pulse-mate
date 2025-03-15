import { HeartPulse } from 'lucide-react'

export default function OnboardingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-screen flex items-center justify-center flex-col gap-3 '>
			<div className='flex justify-center sm:mt-0 mt-5'>
				<HeartPulse className='text-red-400 w-12 h-12' />
			</div>
			<div className='max-w-sm sm:max-w-md px-5 sm:px-0 overflow-auto sm:py-0 py-5 sm:my-0 my-5'>
				{children}
			</div>
		</div>
	)
}
