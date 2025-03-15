import { Button } from '@/ui/form/Button'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { HeartPulse } from 'lucide-react'
import { trackItems } from '../../business/trackItems'
import { useNextStep } from '../../hooks/useNextStep'

export default function Page2() {
	const { nextStep } = useNextStep(2)

	return (
		<div className='flex flex-col gap-3 text-gray-300 text-center'>
			<div className='flex justify-center'>
				<HeartPulse className='text-red-400 w-12 h-12' />
			</div>
			<Heading>What You Can Track</Heading>
			<Paragraph>With Pulse Mate, you can log and track</Paragraph>
			<ul className='flex flex-col gap-2 items-center mt-2'>
				{trackItems.map(item => (
					<li className='flex items-center gap-2' key={item.title}>
						<span className='text-xl'>{item.icon}</span>
						<span>{item.title}</span>
					</li>
				))}
			</ul>
			<Paragraph className='border-b border-red-400 my-1'>
				Start tracking and see your progress over time!
			</Paragraph>
			<Button className='mt-2' onClick={nextStep}>
				Next
			</Button>
		</div>
	)
}
