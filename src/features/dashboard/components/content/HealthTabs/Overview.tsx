import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { WrapperCard } from '@/ui/WrapperCard'
import { HealthMetricsChart } from '../../overview/components/Charts/HealhMetricChart'
import { RecentReadings } from '../../overview/components/Readings/RecentReadings'

export function Overview() {
	return (
		<div className='grid md:grid-cols-2 gap-4 lg:grid-cols-7'>
			<div className='lg:col-span-4'>
				<WrapperCard>
					<Heading level={2} variant='h2'>
						Health Metrics
					</Heading>
					<Paragraph className='mb-4'>
						Your health metrics over the past 30 days
					</Paragraph>
					<HealthMetricsChart />
				</WrapperCard>
			</div>
			<div className='lg:col-span-3'>
				<WrapperCard>
					<Heading level={2} variant='h2'>
						Recent Readings
					</Heading>
					<Paragraph className='mb-4'>
						Your most recent health measurements
					</Paragraph>
					<RecentReadings />
				</WrapperCard>
			</div>
		</div>
	)
}
