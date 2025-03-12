'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

type StepperProps = {
	currentStep: number
}

const Intro = dynamic(
	() => import('@/features/onboarding/components/pages/Into')
)

const steps = [Intro]

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
