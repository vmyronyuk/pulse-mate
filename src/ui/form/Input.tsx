import { cn } from '@/utils/cn'
import { InputHTMLAttributes } from 'react'

type InputProps = {
	type?: InputHTMLAttributes<HTMLInputElement>['type']
	className?: string
}

export const Input = ({ type = 'text', className }: InputProps) => {
	return (
		<input
			type={type}
			className={cn(
				'bg-zinc-700 outline-none h-10 rounded-md border border-red-400 focus:border-2 px-3',
				className
			)}
		/>
	)
}
