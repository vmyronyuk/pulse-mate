'use client'

import { savePersonalInformation } from '@/services/onboarding/page3'
import { Button } from '@/ui/form/Button'
import { CustomSelect } from '@/ui/form/CustomSelect'
import { Error } from '@/ui/form/Error'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
	activityLevelOptions,
	genderOptions,
	healthGoalOptions,
} from '../../business/personal-information'
import {
	PersonalInformationDto,
	PersonalInformationDtoType,
} from '../../dtos/personal-information.dto'
import { useNextStep } from '../../hooks/useNextStep'
import { OnboardingWrapper } from '../OnboardingWrapper'

export default function Page3() {
	const [loading, setLoading] = useState(false)

	const { nextStep } = useNextStep(3)
	const onClick = async (data: PersonalInformationDtoType) => {
		try {
			setLoading(true)
			await savePersonalInformation(data)
			nextStep()
		} catch (error) {
			console.log('page 3', error)
		} finally {
			setLoading(false)
		}
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<PersonalInformationDtoType>({
		resolver: zodResolver(PersonalInformationDto),
		mode: 'onChange',
	})

	return (
		<OnboardingWrapper>
			<Heading>Let’s personalize your experience!</Heading>
			<Paragraph>
				Tell us about yourself to get the most out of Pulse Mate.
			</Paragraph>
			<form
				className='flex flex-col gap-3 text-left'
				onSubmit={handleSubmit(onClick)}
			>
				<div className='flex gap-3 sm:flex-row flex-col text-left '>
					<Field>
						<Input
							placeholder='First Name'
							{...register('firstName')}
							className='w-full'
						/>
						<Error error={errors.firstName} />
					</Field>
					<Field>
						<Input
							placeholder='Last Name'
							{...register('lastName')}
							className='w-full'
						/>
						<Error error={errors.lastName} />
					</Field>
				</div>
				<Field>
					<Input
						placeholder='Date of Birth'
						className='w-full'
						{...register('dateOfBirth')}
					/>
					<Error error={errors.dateOfBirth} />
				</Field>
				<div className='flex gap-3 sm:flex-row flex-col text-left w-full'>
					<Field>
						<Input
							placeholder='Height'
							className='w-full'
							{...register('height')}
						/>
						<Error error={errors.height} />
					</Field>
					<Field>
						<Input
							placeholder='Weight'
							{...register('weight')}
							className='w-full'
						/>
						<Error error={errors.weight} />
					</Field>
				</div>
				<Field>
					<Controller
						name='gender'
						control={control}
						rules={{ required: true }}
						render={({ field: { value, onChange } }) => (
							<CustomSelect
								placeholder='Gender'
								options={genderOptions}
								onChange={onChange}
								value={value}
							/>
						)}
					/>
					<Error error={errors.gender} />
				</Field>
				<div className='flex gap-3 sm:flex-row flex-col'>
					<Field>
						<Controller
							name='activityLevel'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange } }) => (
								<CustomSelect
									placeholder='Activity Level'
									options={activityLevelOptions}
									onChange={onChange}
									value={value}
								/>
							)}
						/>
						<Error error={errors.activityLevel} />
					</Field>
					<Field>
						<Controller
							name='healthGoal'
							control={control}
							render={({ field: { value, onChange } }) => (
								<CustomSelect
									placeholder='Health Goal'
									options={healthGoalOptions}
									onChange={onChange}
									value={value}
								/>
							)}
						/>
						<Error error={errors.healthGoal} />
					</Field>
				</div>
				<Button type='submit' loading={loading}>
					Fill Details
				</Button>
			</form>
		</OnboardingWrapper>
	)
}
