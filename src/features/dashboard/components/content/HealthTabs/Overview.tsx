'use client'

import { ChartType } from '@/features/dashboard/business/charts'
import { UserDto } from '@/features/dashboard/dtos/user.dto'
import { Tabs, TabsList, TabsTrigger } from '@/ui/tabs'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { WrapperCard } from '@/ui/WrapperCard'
import { useState } from 'react'
import { HealthMetricsChart } from '../../overview/components/Charts/HealhMetricChart'
import { RecentReadings } from '../../overview/components/Readings/RecentReadings'

type OverviewProps = {
	historicData: UserDto['historic_health_data']
}

export function Overview({ historicData }: OverviewProps) {
	const [chartType, setChartType] = useState<ChartType>('heartRate')

	const changeChartTypeHandler = (chartType: ChartType) => {
		setChartType(chartType)
	}

	return (
		<div className='flex flex-col gap-5'>
			<Tabs className='flex flex-col gap-3' defaultValue='heartRate'>
				<TabsList className='grid grid-cols-2'>
					<TabsTrigger
						value='heartRate'
						onClick={() => changeChartTypeHandler('heartRate')}
					>
						Blood & Heart
					</TabsTrigger>
					<TabsTrigger
						value='weight'
						onClick={() => changeChartTypeHandler('weight')}
					>
						Weight
					</TabsTrigger>
				</TabsList>
				<TabsList className='grid grid-cols-2'>
					<TabsTrigger
						value='waterIntake'
						onClick={() => changeChartTypeHandler('waterIntake')}
					>
						Sleep & Water
					</TabsTrigger>
					<TabsTrigger
						value='steps'
						onClick={() => changeChartTypeHandler('steps')}
					>
						Steps
					</TabsTrigger>
				</TabsList>
			</Tabs>
			<WrapperCard>
				<Heading level={2} variant='h2'>
					Health Metrics
				</Heading>
				<Paragraph className='mb-4'>
					Your health metrics over the past 30 days
				</Paragraph>
				<HealthMetricsChart historicDate={historicData} chartType={chartType} />
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
