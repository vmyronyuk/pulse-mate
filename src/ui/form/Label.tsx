import { cn } from '@/utils/cn'

type LabelProps = {
	children: React.ReactNode
	className?: string
}

export const Label = ({ children, className }: LabelProps) => {
	return (
		<label className={cn('text-base font-semibold', className)}>
			{children}
		</label>
	)
}
