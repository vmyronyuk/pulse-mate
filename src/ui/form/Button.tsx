import { cn } from '@/utils/cn'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
	children: React.ReactNode
	className?: string
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	onClick?: () => void
}

export const Button = ({ children, className, type, onClick }: ButtonProps) => {
	return (
		<button
			type={type}
			className={cn(
				'w-full bg-red-400 h-10 rounded-md hover:bg-rose-400 transition-all',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
