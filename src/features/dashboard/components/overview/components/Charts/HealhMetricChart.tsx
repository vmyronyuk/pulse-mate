'use client'

import { useEffect, useState } from 'react'
import {
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

const generateData = () => {
	const data = []
	const now = new Date()

	for (let i = 29; i >= 0; i--) {
		const date = new Date(now)
		date.setDate(date.getDate() - i)

		const heartRate = Math.floor(Math.random() * 15) + 65
		const systolic = Math.floor(Math.random() * 20) + 110
		const diastolic = Math.floor(Math.random() * 15) + 70
		const weight = Math.floor(Math.random() * 3 * 10) / 10 + 83
		data.push({
			date: date.toLocaleDateString('en-US', {
				month: 'short',
				day: 'numeric',
			}),
			heartRate,
			bloodPressure: systolic,
			weight,
		})
	}

	return data
}

export function HealthMetricsChart() {
	const [data, setData] = useState<any[]>([])

	useEffect(() => {
		setData(generateData())
	}, [])

	return (
		<div className='h-[300px] w-full'>
			<ResponsiveContainer width='100%' height='100%'>
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
						dataKey='bloodPressure'
						stroke='#3b82f6'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#3b82f6', opacity: 0.8 } }}
					/>
					<Line
						type='monotone'
						dataKey='weight'
						stroke='#10b981'
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6, style: { fill: '#10b981', opacity: 0.8 } }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
