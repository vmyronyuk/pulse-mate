import { cn } from '@/lib/utils'

type FieldProps = {
	children: React.ReactNode
	className?: string
}

export const Field = ({ children, className }: FieldProps) => {
	return (
		<div className={cn(className, 'flex flex-col gap-2 w-full')}>
			{children}
		</div>
	)
}
