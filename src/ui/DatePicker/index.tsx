'use client'

import { cn } from '@/utils/cn'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Button } from '../button'
import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'

type DatePickerProps = {
	value: Date | undefined
	onChange: (date: Date) => void
}

export function DatePicker({ value, onChange }: DatePickerProps) {
	const onChangeHandler = (date: Date | undefined) => {
		if (date) {
			onChange(date)
		}
	}

	const today = new Date()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-full h-10 justify-between text-left font-normal px-3 hover:bg-transparent border',
						!value && 'text-muted-foreground'
					)}
				>
					{value ? format(value, 'PPP') : <span>Pick a date</span>}
					<CalendarIcon className='h-4 w-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar
					mode='single'
					selected={value}
					toDate={today}
					onSelect={onChangeHandler}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
