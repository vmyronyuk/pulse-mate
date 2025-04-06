import {
	CurrentHealthDataDto,
	CurrentHealthDataDtoSchema,
} from '@/features/onboarding/dtos/current-health.dto'
import { Button } from '@/ui/button'
import { Error } from '@/ui/form/Error'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { saveCurrentHealthDataAction } from '../../actions/current-health-data'
import { useNextStep } from '../../hooks/useNextStep'
import { OnboardingWrapper } from '../OnboardingWrapper'
export default function Page4() {
	const [loading, setLoading] = useState(false)

	const { nextStep } = useNextStep(4)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CurrentHealthDataDto>({
		resolver: zodResolver(CurrentHealthDataDtoSchema),
		mode: 'onChange',
	})

	const onSubmit = async (data: CurrentHealthDataDto) => {
		try {
			setLoading(true)
			await saveCurrentHealthDataAction(data)
			nextStep()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<OnboardingWrapper>
			<Heading>Log your current health data</Heading>
			<Paragraph>
				To get started, enter your latest health readings. You can update them
				anytime!
			</Paragraph>
			<form
				className='flex flex-col gap-3 text-left'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-3'>
					<Field>
						<Label>Systolic (mmHg)</Label>
						<Input
							placeholder='120'
							type='number'
							{...register('bloodPressure.systolic')}
						/>
						<Error error={errors.bloodPressure?.systolic} />
					</Field>
					<Field>
						<Label>Diastolic (mmHg)</Label>
						<Input
							placeholder='80'
							type='number'
							{...register('bloodPressure.diastolic')}
						/>
						<Error error={errors.bloodPressure?.diastolic} />
					</Field>
				</div>
				<Field>
					<Label>Heart Rate (BPM)</Label>
					<Input placeholder='72' {...register('heartRate')} type='number' />
					<Error error={errors.heartRate} />
				</Field>
				<Field>
					<Label>Current Weight (kg)</Label>
					<Input
						placeholder='80'
						{...register('currentWeight')}
						type='number'
					/>
					<Error error={errors.currentWeight} />
				</Field>
				<Field>
					<Label>Water Intake today (L)</Label>
					<Input
						placeholder='1.8'
						{...register('waterIntake')}
						type='number'
						step={0.1}
					/>
					<Error error={errors.waterIntake} />
				</Field>
				<Field>
					<Label>Hours slept last night</Label>
					<Input
						placeholder='7.4'
						{...register('sleepHours')}
						type='number'
						step={0.1}
					/>
					<Error error={errors.sleepHours} />
				</Field>
				<Field>
					<Label>Steps</Label>
					<Input placeholder='7235' {...register('steps')} type='number' />
					<Error error={errors.steps} />
				</Field>
				<Paragraph className='text-center text-base font-medium text-foreground'>
					Stay consistent to see real progress!
				</Paragraph>
				<Button type='submit' loading={loading}>
					Continue
				</Button>
			</form>
		</OnboardingWrapper>
	)
}
