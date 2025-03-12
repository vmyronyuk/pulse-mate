export default function OnboardingLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-screen flex items-center justify-center'>
			<div className='max-w-md'>{children}</div>
		</div>
	)
}
