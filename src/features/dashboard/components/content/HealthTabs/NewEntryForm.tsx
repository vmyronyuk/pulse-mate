import { Button } from '@/ui/button'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Textarea } from '@/ui/textarea'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'

export function NewEntryForm() {
	return (
		<div className='border p-5 rounded-md border-secondary'>
			<Heading level={2} variant='h2'>
				Add New Health Data
			</Heading>
			<Paragraph>Manually enter your health measurements</Paragraph>
			<form className='mt-4 flex flex-col gap-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
					<Field>
						<Label>Date</Label>
						<Input placeholder='April 3rd, 2025' />
					</Field>
					<Field>
						<Label>Heart Rate (BPM)</Label>
						<Input placeholder='72' />
					</Field>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
					<div className='grid grid-cols-2 gap-3'>
						<Field>
							<Label>Systolic (mmHg)</Label>
							<Input placeholder='80' />
						</Field>
						<Field>
							<Label>Diastolic (mmHg)</Label>
							<Input placeholder='80' />
						</Field>
					</div>
					<Field>
						<Label>Weight (kg)</Label>
						<Input placeholder='80' />
					</Field>
				</div>
				<div className='grid grid-cols-1 gap-3'>
					<Field>
						<Label>Steps</Label>
						<Input placeholder='7814' />
					</Field>
					<Field>
						<Label>Water intake</Label>
						<Input placeholder='1.8' />
					</Field>
					<Field>
						<Label>Sleep hours</Label>
						<Input placeholder='7.1' />
					</Field>
				</div>
				<Field>
					<Label>Notes</Label>
					<Textarea
						rows={3}
						placeholder='Add any additional notes about your health'
					/>
				</Field>
				<Button className='w-full sm:w-fit self-end'>Save health data</Button>
			</form>
		</div>
	)
}
