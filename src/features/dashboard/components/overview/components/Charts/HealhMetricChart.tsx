'use client'

import { ChartType } from '@/features/dashboard/business/charts'
import { UserDto } from '@/features/dashboard/dtos/user.dto'
import { useEffect, useState } from 'react'
import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

type HealthMetricsChartProps = {
	historicDate: UserDto['historic_health_data']
	chartType?: ChartType
}

export function HealthMetricsChart({
	historicDate,
	chartType,
}: HealthMetricsChartProps) {
	const [data, setData] = useState<any[]>([])

	useEffect(() => {
		const sorted = historicDate.sort(
			(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
		)
		const formattedData = sorted.map(entry => {
			const date = new Date(entry.date)
			const formattedDate = date.toLocaleDateString('en-US', {
				month: 'short',
				day: 'numeric',
			})

			let chartData = {}

			if (chartType === 'heartRate') {
				chartData = {
					date: formattedDate,
					diastolic: entry.bloodPressure.diastolic,
					systolic: entry.bloodPressure.systolic,
					heartRate: entry.heartRate,
				}
			} else if (chartType === 'weight') {
				chartData = {
					date: formattedDate,
					weight: entry.weight,
				}
			} else if (chartType === 'waterIntake') {
				chartData = {
					date: formattedDate,
					waterIntake: entry.waterIntake,
					sleepHours: entry.sleepHours,
				}
			} else if (chartType === 'steps') {
				chartData = {
					date: formattedDate,
					steps: entry.steps,
				}
			}

			return chartData
		})

		setData(formattedData)
	}, [chartType])

	return (
		<div className='h-[300px] w-full'>
			<ResponsiveContainer width='100%' height='100%' className='!p-0 m-0'>
				<LineChart
					data={data}
					margin={{
						top: 5,
						right: 10,
						left: 10,
						bottom: 0,
					}}
				>
					<XAxis
						dataKey='date'
						tickLine={false}
						axisLine={false}
						tickMargin={10}
						stroke='#888888'
						fontSize={12}
					/>
					<YAxis
						tickLine={false}
						axisLine={false}
						tickMargin={10}
						stroke='#888888'
						fontSize={12}
					/>
					<Tooltip
						content={({ active, payload, label }) => {
							if (active && payload && payload.length) {
								return (
									<div className='rounded-lg border bg-background p-2 shadow-sm'>
										<div className='grid grid-cols-2 gap-2'>
											<div className='font-medium'>{label}</div>
											<div className='font-medium'>Value</div>
											{payload.map(entry => (
												<div
													key={entry.name}
													className='flex items-center gap-2'
												>
													<div
														className='h-2 w-2 rounded-full'
														style={{ backgroundColor: entry.color }}
													/>
													<div>{entry.name}</div>
													<div>{entry.value}</div>
												</div>
											))}
										</div>
									</div>
								)
							}
							return null
						}}
					/>
					<Line
						type='monotone'
						dataKey='heartRate'
						stroke='#ef4444'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#ef4444', opacity: 0.8 } }}
					/>
					<Line
						type='monotone'
						dataKey='diastolic'
						stroke='#2b7fff'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#2b7fff', opacity: 0.8 } }}
					/>
					<Line
						type='monotone'
						dataKey='systolic'
						stroke='#efb100'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#efb100', opacity: 0.8 } }}
					/>
					<Line
						type='monotone'
						dataKey='weight'
						stroke='#10b981'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#10b981', opacity: 0.8 } }}
					/>
					<Line
						type='monotone'
						dataKey='waterIntake'
						stroke='#74d4ff'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#74d4ff', opacity: 0.8 } }}
					/>
					<Line
						type='monotone'
						dataKey='sleepHours'
						stroke='#d08700'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#d08700', opacity: 0.8 } }}
					/>
					<Line
						type='monotone'
						dataKey='steps'
						stroke='#e5e7eb'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#e5e7eb', opacity: 0.8 } }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
