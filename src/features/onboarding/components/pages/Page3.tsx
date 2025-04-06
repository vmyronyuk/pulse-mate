'use client'

import { Button } from '@/ui/button'
import { CustomSelect } from '@/ui/form/CustomSelect'
import { Error } from '@/ui/form/Error'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { savePersonalInformationOnboardingAction } from '../../actions/personal-information'
import {
	activityLevelOptions,
	genderOptions,
	healthGoalOptions,
} from '../../business/personal-information'
import {
	PersonalInformationDto,
	PersonalInformationDtoSchema,
} from '../../dtos/personal-information.dto'
import { useNextStep } from '../../hooks/useNextStep'
import { OnboardingWrapper } from '../OnboardingWrapper'

export default function Page3() {
	const [loading, setLoading] = useState(false)

	const { nextStep } = useNextStep(3)
	const onClick = async (data: PersonalInformationDto) => {
		try {
			setLoading(true)
			await savePersonalInformationOnboardingAction(data)
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
	} = useForm<PersonalInformationDto>({
		resolver: zodResolver(PersonalInformationDtoSchema),
		mode: 'onChange',
	})

	return (
		<OnboardingWrapper>
			<Heading>Let’s personalize your experience!</Heading>
			<Paragraph>
				Tell us about yourself to get the most out of Pulse Mate.
			</Paragraph>
			<form
				className='flex flex-col gap-3 text-left px-1'
				onSubmit={handleSubmit(onClick)}
			>
				<div className='flex gap-3 sm:flex-row flex-col text-left '>
					<Field>
						<Label>First Name</Label>
						<Input
							placeholder='Jon'
							{...register('firstName')}
							className='w-full'
						/>
						<Error error={errors.firstName} />
					</Field>
					<Field>
						<Label>Last Name</Label>
						<Input
							placeholder='Doe'
							{...register('lastName')}
							className='w-full'
						/>
						<Error error={errors.lastName} />
					</Field>
				</div>
				<Field>
					<Label>Date of Birth</Label>
					<Input
						placeholder='MM/DD/YYYY'
						pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}'
						maxLength={10}
						className='w-full'
						{...register('dateOfBirth')}
					/>
					<Error error={errors.dateOfBirth} />
				</Field>
				<div className='flex gap-3 sm:flex-row flex-col text-left w-full'>
					<Field>
						<Label>Height</Label>
						<Input
							placeholder='180'
							className='w-full'
							{...register('height')}
						/>
						<Error error={errors.height} />
					</Field>
					<Field>
						<Label>Weight</Label>
						<Input
							placeholder='78'
							{...register('weight')}
							className='w-full'
						/>
						<Error error={errors.weight} />
					</Field>
				</div>
				<Field>
					<Label>Gender</Label>
					<Controller
						name='gender'
						control={control}
						rules={{ required: true }}
						render={({ field: { value, onChange } }) => (
							<CustomSelect
								placeholder='Male'
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
						<Label>Activity Level</Label>
						<Controller
							name='activityLevel'
							control={control}
							rules={{ required: true }}
							render={({ field: { value, onChange } }) => (
								<CustomSelect
									placeholder='Light'
									options={activityLevelOptions}
									onChange={onChange}
									value={value}
								/>
							)}
						/>
						<Error error={errors.activityLevel} />
					</Field>
					<Field>
						<Label>Health Goal</Label>
						<Controller
							name='healthGoal'
							control={control}
							render={({ field: { value, onChange } }) => (
								<CustomSelect
									placeholder='Improve Fitness'
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
