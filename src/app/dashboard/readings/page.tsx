import { RecentReadings } from '@/features/dashboard/components/overview/components/Readings/RecentReadings'
import { getCurrentUserData } from '@/features/dashboard/dal/current-user-data'
import { ReadingsHeader } from '@/features/dashboard/readings/components/ReadingsHeader'
import { unauthorized } from 'next/navigation'

export default async function ReadingsPage() {
	const user = await getCurrentUserData()
	if (!user) unauthorized()

	return (
		<div className='px-4 py-4 flex flex-col gap-4'>
			<ReadingsHeader />
			<RecentReadings
				isPage
				historicData={user.historic_health_data}
				limit={999}
			/>
		</div>
	)
}
