import { Button } from '@/ui/form/Button'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { redirect } from 'next/navigation'
import { OnboardingWrapper } from '../OnboardingWrapper'

export default function Finish() {
	const onClick = () => {
		redirect('/dashboard')
	}
	return (
		<OnboardingWrapper>
			<Heading>You&apos;re all set!</Heading>
			<Paragraph>
				Welcome to <span className='font-bold underline'>Pulse Mate</span>!
				Start logging your health data, track your progress, and stay in control
				of your well-being.
			</Paragraph>
			<Paragraph>🎯 Small steps lead to big changes!</Paragraph>
			<Button onClick={onClick}>Start tracking</Button>
		</OnboardingWrapper>
	)
}
