export function WrapperCard({ children }: { children: React.ReactNode }) {
	return (
		<div className='p-5 rounded-md border border-secondary'>{children}</div>
	)
}
