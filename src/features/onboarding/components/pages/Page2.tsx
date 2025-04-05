import { Button } from '@/ui/button'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { trackItems } from '../../business/trackItems'
import { useNextStep } from '../../hooks/useNextStep'
import { OnboardingWrapper } from '../OnboardingWrapper'

export default function Page2() {
	const { nextStep } = useNextStep(2)

	return (
		<OnboardingWrapper>
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
			<Paragraph className='border-b border-primary my-1'>
				Start tracking and see your progress over time!
			</Paragraph>
			<Button className='mt-2' onClick={nextStep}>
				Next
			</Button>
		</OnboardingWrapper>
	)
}
