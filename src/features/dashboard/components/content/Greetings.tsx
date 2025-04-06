import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { UserDto } from '../../dtos/user.dto'

type GreetingsProps = {
	firstName: UserDto['firstName']
}

export function Greetings({ firstName }: GreetingsProps) {
	return (
		<div className='flex flex-col gap-1'>
			<Heading level={2} variant='h2'>
				Hi, {firstName} 👋
			</Heading>
			<Paragraph className='font-semibold'>
				Hope you are doing well today 😊
			</Paragraph>
		</div>
	)
}
