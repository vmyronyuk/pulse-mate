'use client'

import { UserDto } from '@/features/dashboard/dtos/user.dto'
import { Button } from '@/ui/button'
import { Paragraph } from '@/ui/typography/Paragraph'
import {
	Activity,
	Calendar,
	Footprints,
	GlassWater,
	Heart,
	Moon,
	Weight,
} from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

type RecentReadingsProps = {
	historicData: UserDto['historic_health_data']
	limit: number
	isPage?: boolean
}

export function RecentReadings({
	historicData,
	limit,
	isPage,
}: RecentReadingsProps) {
	const searchParams = useSearchParams()

	const period = searchParams.get('period') || '30'

	const filteredData = historicData.filter(reading => {
		const readingDate = new Date(reading.date)
		const currentDate = new Date()
		const differenceInTime = currentDate.getTime() - readingDate.getTime()

		const msInDay = 24 * 60 * 60 * 1000
		const daysDifference = differenceInTime / msInDay

		return daysDifference <= parseInt(period)
	})

	const sortedData = filteredData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)

	const limitedData = sortedData.slice(0, limit)
	return (
		<div className='space-y-3.5'>
			{limitedData.map((reading, index) => (
				<div key={index} className='space-y-2'>
					<div
						className={`flex items-center gap-1 ${
							isPage ? 'text-sm' : 'text-xs'
						} text-muted-foreground font-semibold`}
					>
						<Calendar className={`${isPage ? 'h-4 w-4' : 'h-3 w-3'}`} />
						<span>{new Date(reading.date).toLocaleDateString()}</span>
					</div>

					{reading.weight && (
						<div className='flex items-center gap-2'>
							<Paragraph
								className={`${isPage ? 'text-lg' : 'text-lg'} text-foreground`}
							>
								Weight:{' '}
								<span className={`${isPage ? 'font-semibold text-base' : ''}`}>
									{reading.weight} kg
								</span>
							</Paragraph>
							<Weight
								className={`${isPage ? 'h-5 w-5' : 'h-4 w-4'} text-green-500`}
							/>
						</div>
					)}

					{reading.waterIntake && (
						<div className='flex items-center gap-2'>
							<Paragraph
								className={`${isPage ? 'text-lg' : 'text-sm'} text-foreground`}
							>
								Water intake:{' '}
								<span className={`${isPage ? 'font-semibold text-base' : ''}`}>
									{reading.waterIntake} L
								</span>
							</Paragraph>
							<GlassWater
								className={`${isPage ? 'h-5 w-5' : 'h-4 w-4'} text-sky-300`}
							/>
						</div>
					)}

					{reading.steps && (
						<div className='flex items-center gap-2'>
							<Paragraph
								className={`${isPage ? 'text-lg' : 'text-sm'} text-foreground`}
							>
								Steps:{' '}
								<span className={`${isPage ? 'font-semibold text-base' : ''}`}>
									{reading.steps}
								</span>
							</Paragraph>
							<Footprints
								className={`${isPage ? 'h-5 w-5' : 'h-4 w-4'} text-gray-300`}
							/>
						</div>
					)}

					{reading.heartRate && (
						<div className='flex items-center gap-2'>
							<Paragraph
								className={`${isPage ? 'text-lg' : 'text-sm'} text-foreground`}
							>
								Heart rate:{' '}
								<span className={`${isPage ? 'font-semibold text-base' : ''}`}>
									{reading.heartRate} bpm
								</span>
							</Paragraph>
							<Heart
								className={`${isPage ? 'h-5 w-5' : 'h-4 w-4'} text-red-600`}
							/>
						</div>
					)}

					{reading.sleepHours && (
						<div className='flex items-center gap-2'>
							<Paragraph
								className={`${isPage ? 'text-lg' : 'text-sm'} text-foreground`}
							>
								Sleep hours:{' '}
								<span className={`${isPage ? 'font-semibold text-base' : ''}`}>
									{reading.sleepHours} h
								</span>
							</Paragraph>
							<Moon
								className={`${isPage ? 'h-5 w-5' : 'h-4 w-4'} text-yellow-500`}
							/>
						</div>
					)}

					{reading.bloodPressure &&
						reading.bloodPressure.systolic &&
						reading.bloodPressure.diastolic && (
							<div className='flex items-center gap-2'>
								<Paragraph
									className={`${
										isPage ? 'text-lg' : 'text-sm'
									} text-foreground`}
								>
									Blood pressure:{' '}
									<span
										className={`${isPage ? 'font-semibold text-base' : ''}`}
									>
										{reading.bloodPressure.systolic}/
										{reading.bloodPressure.diastolic} mmHg
									</span>
								</Paragraph>
								<Activity
									className={`${isPage ? 'h-5 w-5' : 'h-4 w-4'} text-blue-500`}
								/>
							</div>
						)}

					{reading.notes && isPage && (
						<Paragraph
							className={`${isPage ? 'text-lg' : 'text-sm'} text-foreground`}
						>
							{reading.notes}
						</Paragraph>
					)}
					<div className='border-t my-2'></div>
				</div>
			))}

			{historicData.length > limit && (
				<Link href='/dashboard/readings' passHref>
					<Button variant='outline' className='w-full'>
						View all readings
					</Button>
				</Link>
			)}
		</div>
	)
}
