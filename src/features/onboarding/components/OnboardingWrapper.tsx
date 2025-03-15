export function OnboardingWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col gap-3 text-gray-300 text-center'>
			{children}
		</div>
	)
}
