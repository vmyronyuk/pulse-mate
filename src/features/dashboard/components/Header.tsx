import { Button } from '@/ui/button'
import { Heart, User } from 'lucide-react'

export function Header() {
	return (
		<header className='flex justify-between items-center py-5 border-b  px-8'>
			<div className='flex items-center gap-3'>
				<Heart className='w-8 h-8 text-primary animate-pulse' />
				<span className='font-semibold text-lg'>Pulse Mate</span>
			</div>
			<Button
				className='w-fit px-4 flex items-center gap-3'
				variant={'outline'}
			>
				<User />
				<span>Profile</span>
			</Button>
		</header>
	)
}
