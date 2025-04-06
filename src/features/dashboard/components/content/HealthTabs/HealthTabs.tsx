import { Button } from '@/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { Plus } from 'lucide-react'
import { NewEntryForm } from './NewEntryForm'
import { Overview } from './Overview'

export function HealthTabs() {
	return (
		<Tabs defaultValue='overview' className='flex flex-col gap-4'>
			<div className='flex justify-between items-center'>
				<TabsList className='grid grid-cols-2 min-w-[8rem] sm:min-w-[23rem]'>
					<TabsTrigger value='overview'>Overview</TabsTrigger>
					<TabsTrigger value='newEntry'>New Entry</TabsTrigger>
				</TabsList>
				<Button className='flex items-center gap-2'>
					<Plus />
					<span>Add Reading</span>
				</Button>
			</div>
			<TabsContent value='overview'>
				<Overview />
			</TabsContent>
			<TabsContent value='newEntry'>
				<NewEntryForm />
			</TabsContent>
		</Tabs>
	)
}
