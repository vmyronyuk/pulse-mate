import { cn } from '@/utils/cn'

type ParagraphProps = {
	children: React.ReactNode
	className?: string
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
	return <p className={cn('text-sm text-foreground', className)}>{children}</p>
}
