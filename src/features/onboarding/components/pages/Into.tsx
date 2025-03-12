import { Button } from '@/ui/form/Button'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { Check, HeartPulse } from 'lucide-react'
import { useNextStep } from '../../hooks/useNextStep'

export default function Into() {
	const { nextStep } = useNextStep(1)

	return (
		<div className='flex flex-col gap-3 text-gray-300'>
			<div className='flex justify-center'>
				<HeartPulse className='text-red-400 w-12 h-12' />
			</div>
			<Heading className='text-center'>Welcome to Pulse Mate!</Heading>
			<Paragraph className='text-center'>
				Your personal health tracker to monitor and improve your well-being.
				Stay on top of your heart rate, activity, sleep, and more!
			</Paragraph>
			<ul className='flex flex-col gap-2 items-center mt-2'>
				<li className='flex items-center gap-2'>
					<CheckIcon /> Track vital signs in real time
				</li>
				<li className='flex items-center gap-2'>
					<CheckIcon /> Get personalized health insights
				</li>
				<li className='flex items-center gap-2'>
					<CheckIcon /> Stay motivated with reminders and analytics
				</li>
			</ul>
			<Button className='mt-2' onClick={nextStep}>
				Get Started
			</Button>
		</div>
	)
}

const CheckIcon = () => {
	return <Check className='w-4 h-4 text-white' />
}
