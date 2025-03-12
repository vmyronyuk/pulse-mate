import { cn } from '@/utils/cn'

export const Heading = ({
	children,
	variant = 'h1',
	level = 1,
	className,
}: {
	children: React.ReactNode
	variant?: 'h1' | 'h2' | 'h3'
	level?: 1 | 2 | 3
	className?: string
}) => {
	return variant === 'h1' ? (
		<h1 className={cn('text-3xl font-bold', className)}>{children}</h1>
	) : variant === 'h2' ? (
		<h2 className={cn('text-2xl font-bold', className)}>{children}</h2>
	) : (
		<h3 className={cn('text-xl font-bold', className)}>{children}</h3>
	)
}
