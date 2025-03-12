import { Stepper } from '@/features/onboarding/components/Stepper'

type Props = {
	params: Promise<{ page: string }>
}

export default async function OnboardingPage({ params }: Props) {
	const pageParams = await params
	return (
		<div>
			<Stepper currentStep={Number(pageParams.page)} />
		</div>
	)
}
