'use client'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button } from '../button'
import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'

type DatePickerProps = {
	placeholder?: string
}

export function DatePicker({ placeholder }: DatePickerProps) {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild className='h-10'>
				<Button
					variant={'outline'}
					className={cn(
						'w-full justify-between text-left font-normal border hover:bg-transparent hover:text-muted-foreground px-3',
						!date && 'text-muted-foreground'
					)}
				>
					{date ? (
						format(date, 'PPP')
					) : (
						<span>{placeholder || 'Pick a date'}</span>
					)}
					<CalendarIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar
					mode='single'
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
