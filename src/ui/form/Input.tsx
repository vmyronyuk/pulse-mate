import { cn } from '@/utils/cn'
import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				className={cn(
					'outline-none h-10 rounded-md border border-red-400 bg-transparent px-3 text-foreground placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm',
					className
				)}
				{...rest}
			/>
		)
	}
)

Input.displayName = 'Input'
