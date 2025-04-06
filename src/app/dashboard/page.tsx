import { Greetings } from '@/features/dashboard/components/content/Greetings'
import { HealthCards } from '@/features/dashboard/components/content/HealthCards'
import { HealthTabs } from '@/features/dashboard/components/content/HealthTabs/HealthTabs'
import { getCurrentUserData } from '@/features/dashboard/dal/current-user-data'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
	const user = await getCurrentUserData()
	if (!user) unauthorized()

	return (
		<div className='px-4 sm:px-12 mt-4 flex flex-col gap-6'>
			<Greetings firstName={user.firstName} />
			<div className='flex flex-col gap-12'>
				<HealthCards
					heartRate={user.heartRate}
					bloodPressure={user.bloodPressure}
					weight={user.weight}
					waterIntake={user.waterIntake}
					sleepHours={user.sleepHours}
					steps={user.steps}
				/>
				<HealthTabs historicData={user.historic_health_data} />
			</div>
		</div>
	)
}
