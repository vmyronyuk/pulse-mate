'use client'

import {
	NewHealthDataDto,
	NewHealthDataDtoSchema,
} from '@/features/dashboard/dtos/new-health-data.dto'
import { Button } from '@/ui/button'
import { DatePicker } from '@/ui/DatePicker'
import { Error } from '@/ui/form/Error'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Textarea } from '@/ui/textarea'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

export function NewEntryForm() {
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<NewHealthDataDto>({
		mode: 'onChange',
		resolver: zodResolver(NewHealthDataDtoSchema),
	})

	const onSubmit = (data: NewHealthDataDto) => {
		setLoading(true)
		console.log(data)
		setLoading(false)
	}

	return (
		<div className='border p-5 rounded-md border-secondary'>
			<Heading level={2} variant='h2'>
				Add New Health Data
			</Heading>
			<Paragraph>Manually enter your health measurements</Paragraph>
			<form
				className='mt-4 flex flex-col gap-6'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
					<Field>
						<Label>Date</Label>
						<Controller
							name='date'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange } }) => (
								<DatePicker value={value} onChange={onChange} />
							)}
						/>
						<Error error={errors.date} />
					</Field>
					<Field>
						<Label>Heart Rate (BPM)</Label>
						<Input type='number' placeholder='72' {...register('heartRate')} />
					</Field>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
					<div className='grid grid-cols-2 gap-3'>
						<Field>
							<Label>Systolic (mmHg)</Label>
							<Input
								type='number'
								placeholder='80'
								{...register('bloodPressure.systolic')}
							/>
							<Error error={errors.bloodPressure?.systolic} />
						</Field>
						<Field>
							<Label>Diastolic (mmHg)</Label>
							<Input
								type='number'
								placeholder='80'
								{...register('bloodPressure.diastolic')}
							/>
							<Error error={errors.bloodPressure?.diastolic} />
						</Field>
					</div>
					<Field>
						<Label>Weight (kg)</Label>
						<Input type='number' placeholder='80' {...register('weight')} />
						<Error error={errors.weight} />
					</Field>
				</div>
				<div className='grid grid-cols-1 gap-3'>
					<Field>
						<Label>Steps</Label>
						<Input type='number' placeholder='7814' {...register('steps')} />
						<Error error={errors.steps} />
					</Field>
					<Field>
						<Label>Water intake</Label>
						<Input
							type='number'
							step={0.1}
							placeholder='1.8'
							{...register('waterIntake')}
						/>
						<Error error={errors.waterIntake} />
					</Field>
					<Field>
						<Label>Sleep hours</Label>
						<Input
							type='number'
							placeholder='7.1'
							{...register('sleepHours')}
						/>
						<Error error={errors.sleepHours} />
					</Field>
				</div>
				<Field>
					<Label>Notes</Label>
					<Textarea
						rows={3}
						placeholder='Add any additional notes about your health'
						{...register('notes')}
					/>
					<Error error={errors.notes} />
				</Field>
				<Button
					type='submit'
					className='w-full sm:w-fit self-end'
					loading={loading}
				>
					Save health data
				</Button>
			</form>
		</div>
	)
}
