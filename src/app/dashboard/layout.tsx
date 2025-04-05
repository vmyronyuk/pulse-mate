import { Header } from '@/features/dashboard/components/Header'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-screen'>
			<Header />
			{children}
		</div>
	)
}
