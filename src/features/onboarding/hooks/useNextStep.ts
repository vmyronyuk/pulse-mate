import { useRouter } from 'next/navigation'

export const useNextStep = (currentStep: number) => {
	const router = useRouter()

	const nextStep = () => {
		router.push(`/onboarding/${currentStep + 1}`)
	}

	return { nextStep }
}
