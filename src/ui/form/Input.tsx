import { cn } from '@/utils/cn'
import { InputHTMLAttributes, forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				className={cn(
					'outline-none h-10 rounded border bg-transparent px-3 text-foreground placeholder:text-muted-foreground placeholder:font-normal placeholder:text-sm',
					className
				)}
				{...rest}
			/>
		)
	}
)

Input.displayName = 'Input'
