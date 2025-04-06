import { UserDto } from '@/features/dashboard/dtos/user.dto'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { WrapperCard } from '@/ui/WrapperCard'
import { HealthMetricsChart } from '../../overview/components/Charts/HealhMetricChart'
import { RecentReadings } from '../../overview/components/Readings/RecentReadings'

type OverviewProps = {
	historicData: UserDto['historic_health_data']
}

export function Overview({ historicData }: OverviewProps) {
	return (
		<div className='flex flex-col gap-5'>
			<WrapperCard>
				<Heading level={2} variant='h2'>
					Health Metrics
				</Heading>
				<Paragraph className='mb-4'>
					Your health metrics over the past 30 days
				</Paragraph>
				<HealthMetricsChart />
			</WrapperCard>

			<WrapperCard>
				<Heading level={2} variant='h2'>
					Recent Readings
				</Heading>
				<Paragraph className='mb-4'>
					Your most recent health measurements
				</Paragraph>
				<RecentReadings historicData={historicData} limit={3} />
			</WrapperCard>
		</div>
	)
}
