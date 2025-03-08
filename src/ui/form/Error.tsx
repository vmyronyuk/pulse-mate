import { FieldError } from 'react-hook-form'

type ErrorProps = {
	error: FieldError | undefined
}

export const Error = ({ error }: ErrorProps) => {
	if (!error) return null

	return <p className='text-sm text-red-500'>{error.message}</p>
}
