'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

type StepperProps = {
	currentStep: number
}

const Intro = dynamic(
	() => import('@/features/onboarding/components/pages/Into')
)

const Page2 = dynamic(
	() => import('@/features/onboarding/components/pages/Page2')
)

const Page3 = dynamic(
	() => import('@/features/onboarding/components/pages/Page3')
)

const Page4 = dynamic(
	() => import('@/features/onboarding/components/pages/Page4')
)

const steps = [Intro, Page2, Page3, Page4]

export function Stepper({ currentStep }: StepperProps) {
	const idx = currentStep - 1
	console.log(idx)
	const CurrentStep = steps[idx] as React.FC
	return (
		<div>
			<Suspense fallback={'Loading...'}>
				<CurrentStep />
			</Suspense>
		</div>
	)
}

const Loading = () => {
	return <div>Loading...</div>
}
