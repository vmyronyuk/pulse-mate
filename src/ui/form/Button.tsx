import { cn } from '@/utils/cn'
import { LoaderCircle } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
	children: React.ReactNode
	className?: string
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	onClick?: () => void
	loading?: boolean
}

export const Button = ({
	children,
	className,
	type,
	onClick,
	loading = false,
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={cn(
				'w-full bg-red-400 h-10 rounded-md hover:bg-rose-400 transition-all flex justify-center items-center gap-2 text-gray-200 font-semibold',
				className
			)}
			onClick={onClick}
		>
			{loading && <LoaderCircle className='animate-spin text-gray-200' />}
			{children}
		</button>
	)
}
