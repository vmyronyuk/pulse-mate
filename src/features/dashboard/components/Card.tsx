type CardProps = {
	icon?: React.ReactNode
	value: string
	title: string
	substring?: string
}

export function Card({ icon, value, title, substring }: CardProps) {
	return (
		<div className='px-5 py-5 border border-secondary rounded flex flex-col gap-1	'>
			<div className='flex items-center justify-between'>
				<span className='text-sm font-semibold'>{title}</span>
				<span>{icon}</span>
			</div>
			<div className='flex flex-col'>
				<span className='text-2xl font-bold'>{value}</span>
				<span className='text-xs text-muted-foreground'>{substring}</span>
			</div>
		</div>
	)
}
