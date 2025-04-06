import {
	CurrentHealthDataDto,
	CurrentHealthDataDtoType,
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
import { useNextStep } from '../../hooks/useNextStep'
import { OnboardingWrapper } from '../OnboardingWrapper'
export default function Page4() {
	const [loading, setLoading] = useState(false)

	const { nextStep } = useNextStep(4)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CurrentHealthDataDtoType>({
		resolver: zodResolver(CurrentHealthDataDto),
		mode: 'onChange',
	})

	const onSubmit = async (data: CurrentHealthDataDtoType) => {
		try {
			setLoading(true)
			// await saveCurrentHealthData(data)
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
						<Input placeholder='120' {...register('bloodPressure.systolic')} />
						<Error error={errors.bloodPressure?.systolic} />
					</Field>
					<Field>
						<Label>Diastolic (mmHg)</Label>
						<Input placeholder='80' {...register('bloodPressure.diastolic')} />
						<Error error={errors.bloodPressure?.diastolic} />
					</Field>
				</div>
				<Field>
					<Label>Heart Rate (BPM)</Label>
					<Input placeholder='72' {...register('heartRate')} />
					<Error error={errors.heartRate} />
				</Field>
				<Field>
					<Label>Current Weight (kg)</Label>
					<Input placeholder='80' {...register('currentWeight')} />
					<Error error={errors.currentWeight} />
				</Field>
				<Field>
					<Label>Water Intake today (L)</Label>
					<Input placeholder='1.8' {...register('waterIntake')} />
					<Error error={errors.waterIntake} />
				</Field>
				<Field>
					<Label>Hours slept last night</Label>
					<Input placeholder='7.4' {...register('sleepHours')} />
					<Error error={errors.sleepHours} />
				</Field>
				<Field>
					<Label>Steps</Label>
					<Input placeholder='7235' {...register('steps')} />
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
