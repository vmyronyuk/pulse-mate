import { Button } from '@/ui/form/Button'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { Check } from 'lucide-react'
import { trackAdvantages } from '../../business/trackAdvantages'
import { useNextStep } from '../../hooks/useNextStep'
import { OnboardingWrapper } from '../OnboardingWrapper'

export default function Into() {
	const { nextStep } = useNextStep(1)

	return (
		<OnboardingWrapper>
			<Heading className='text-center'>Welcome to Pulse Mate!</Heading>
			<Paragraph className='text-center'>
				Your personal health tracker to monitor and improve your well-being.
				Stay on top of your heart rate, activity, sleep, and more!
			</Paragraph>
			<ul className='flex flex-col gap-2 items-center mt-2'>
				{trackAdvantages.map(advantage => (
					<li className='flex items-center gap-2' key={advantage.title}>
						<CheckIcon /> {advantage.title}
					</li>
				))}
			</ul>
			<Button className='mt-2' onClick={nextStep}>
				Get Started
			</Button>
		</OnboardingWrapper>
	)
}

const CheckIcon = () => {
	return <Check className='w-4 h-4 text-white' />
}
