import { Button } from '@/ui/form/Button'
import { CustomSelect } from '@/ui/form/CustomSelect'
import { Input } from '@/ui/form/Input'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import {
	activityLevelOptions,
	genderOptions,
	healthGoalOptions,
} from '../../business/personal-information'
import { useNextStep } from '../../hooks/useNextStep'
import { OnboardingWrapper } from '../OnboardingWrapper'
export default function Page3() {
	const { nextStep } = useNextStep(3)
	const onClick = () => {
		nextStep()
	}
	return (
		<OnboardingWrapper>
			<Heading>Let’s personalize your experience!</Heading>
			<Paragraph>
				Tell us about yourself to get the most out of Pulse Mate.
			</Paragraph>
			<form className='flex flex-col gap-3'>
				<div className='flex gap-3 sm:flex-row flex-col'>
					<Input placeholder='First Name' className='w-full' />
					<Input placeholder='Last Name' className='w-full' />
				</div>
				<Input placeholder='Date of Birth' className='w-full' />
				<div className='flex gap-3 sm:flex-row flex-col'>
					<Input placeholder='Height' className='w-full' />
					<Input placeholder='Weight' className='w-full' />
				</div>
				<CustomSelect
					placeholder='Gender'
					options={genderOptions}
					onChange={() => {}}
					value=''
				/>
				<div className='flex gap-3 sm:flex-row flex-col'>
					<CustomSelect
						placeholder='Activity Level'
						options={activityLevelOptions}
						onChange={() => {}}
						value=''
					/>
					<CustomSelect
						placeholder='Health Goal'
						options={healthGoalOptions}
						onChange={() => {}}
						value=''
					/>
				</div>
				<Button onClick={onClick}>Fill Details</Button>
			</form>
		</OnboardingWrapper>
	)
}
