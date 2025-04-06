'use client'

import { Button } from '@/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'
import { Heading } from '@/ui/typography/Heading'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { BreadcrumbsReadings } from './BreadcrumbsReadings'

export function ReadingsHeader() {
	const [open, setOpen] = useState(false)

	const router = useRouter()
	const searchParams = useSearchParams()

	const period = searchParams.get('period') || '30'

	const changePeriodHandler = (newPerdiod: string) => {
		router.push(`/dashboard/readings?period=${newPerdiod}`)
		setOpen(false)
	}

	return (
		<div className='flex flex-col gap-3'>
			<BreadcrumbsReadings />
			<div className='flex items-center justify-between gap-3'>
				<Heading level={1} variant='h1'>
					All your readings
				</Heading>
				<div>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger>
							<Button
								className='w-28'
								variant={'outline'}
							>{`Last ${period} days`}</Button>
						</PopoverTrigger>
						<PopoverContent className='flex flex-col gap-2 p-2'>
							<Button
								variant={'outline'}
								onClick={() => changePeriodHandler('3')}
							>
								Last 3 days
							</Button>
							<Button
								variant={'outline'}
								onClick={() => changePeriodHandler('7')}
							>
								Last 7 days
							</Button>
							<Button
								variant={'outline'}
								onClick={() => changePeriodHandler('14')}
							>
								Last 14 days
							</Button>
							<Button
								variant={'outline'}
								onClick={() => changePeriodHandler('30')}
							>
								Last 30 days
							</Button>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	)
}
