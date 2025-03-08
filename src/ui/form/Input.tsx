import { cn } from '@/utils/cn'
import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				className={cn(
					'bg-zinc-700 outline-none h-10 rounded-md border border-red-400 focus:border-2 px-3',
					className
				)}
				{...rest}
			/>
		)
	}
)

Input.displayName = 'Input'
