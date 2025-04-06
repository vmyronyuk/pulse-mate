'use client'

import { Button } from '@/ui/button'
import { Activity, Calendar, Heart, Weight } from 'lucide-react'

const recentReadings = [
	{
		id: 1,
		date: 'Today, 9:41 AM',
		type: 'Heart Rate',
		value: '72 BPM',
		icon: Heart,
		iconColor: 'text-rose-500',
	},
	{
		id: 2,
		date: 'Today, 9:40 AM',
		type: 'Blood Pressure',
		value: '120/80 mmHg',
		icon: Activity,
		iconColor: 'text-blue-500',
	},
	{
		id: 3,
		date: 'Today, 9:39 AM',
		type: 'Weight',
		value: '165 lbs',
		icon: Weight,
		iconColor: 'text-green-500',
	},
	{
		id: 4,
		date: 'Yesterday, 8:25 PM',
		type: 'Heart Rate',
		value: '68 BPM',
		icon: Heart,
		iconColor: 'text-rose-500',
	},
	{
		id: 5,
		date: 'Yesterday, 8:24 PM',
		type: 'Blood Pressure',
		value: '118/78 mmHg',
		icon: Activity,
		iconColor: 'text-blue-500',
	},
]

export function RecentReadings() {
	return (
		<div className='space-y-3.5'>
			{recentReadings.map(reading => (
				<div key={reading.id} className='flex items-center gap-4'>
					<div className={`rounded-full p-2 ${reading.iconColor} bg-muted`}>
						<reading.icon className='h-4 w-4' />
					</div>
					<div className='flex-1 space-y-1'>
						<p className='text-sm font-medium leading-none'>{reading.type}</p>
						<p className='text-sm text-muted-foreground'>{reading.value}</p>
					</div>
					<div className='flex items-center gap-1 text-xs text-muted-foreground'>
						<Calendar className='h-3 w-3' />
						<span>{reading.date}</span>
					</div>
				</div>
			))}
			<Button variant={'outline'} className='w-full'>
				View all readings
			</Button>
		</div>
	)
}
