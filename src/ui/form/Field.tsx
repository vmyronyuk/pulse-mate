type FieldProps = {
	children: React.ReactNode
}

export const Field = ({ children }: FieldProps) => {
	return <div className='flex flex-col gap-2 w-full'>{children}</div>
}
