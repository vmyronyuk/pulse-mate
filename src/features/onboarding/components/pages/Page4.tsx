import {
	CurrentHealthDataDto,
	CurrentHealthDataDtoType,
} from '@/features/onboarding/dtos/current-health.dto'
import { saveCurrentHealthData } from '@/services/onboarding/page4'
import { Button } from '@/ui/form/Button'
import { Error } from '@/ui/form/Error'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
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
			await saveCurrentHealthData(data)
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
				<Field>
					<Input
						placeholder='Blood Pressure 📊 (e.g., 120/80 mmHg)'
						{...register('bloodPressure')}
					/>
					<Error error={errors.bloodPressure} />
				</Field>
				<Field>
					<Input placeholder='Heart Rate 💓 (BPM)' {...register('heartRate')} />
					<Error error={errors.heartRate} />
				</Field>
				<Field>
					<Input
						placeholder='Current Weight 💪'
						{...register('currentWeight')}
					/>
					<Error error={errors.currentWeight} />
				</Field>
				<Field>
					<Input
						placeholder='Waters intake today 💧'
						{...register('waterIntake')}
					/>
					<Error error={errors.waterIntake} />
				</Field>
				<Field>
					<Input
						placeholder='Hours slept last night 💤'
						{...register('sleepHours')}
					/>
					<Error error={errors.sleepHours} />
				</Field>
				<Field>
					<Input
						placeholder='Blood sugar level 🩸 (Optional)'
						{...register('bloodSugar')}
					/>
					<Error error={errors.bloodSugar} />
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
