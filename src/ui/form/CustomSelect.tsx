import {
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './select'

import { Option } from '@/lib/types'
import { Select } from './select'
type CustomSelectProps = {
	placeholder: string
	options: Option[]
	onChange: (value: string) => void
	value: string
}

export function CustomSelect({
	placeholder,
	options,
	onChange,
	value,
}: CustomSelectProps) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent side='bottom'>
				<SelectGroup>
					{options.map(option => (
						<SelectItem
							key={option.value}
							value={option.value}
							onClick={() => onChange(option.value)}
						>
							{option.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
