import { PersonalInformationDtoType } from '@/features/onboarding/dtos/personal-information.dto'
import { supabase } from '@/lib/supabaseClient'
import { unauthorized } from 'next/navigation'

export const savePersonalInformation = async (
	data: PersonalInformationDtoType
) => {
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const {
		firstName,
		lastName,
		dateOfBirth,
		height,
		weight,
		gender,
		activityLevel,
		healthGoal,
	} = data

	const { error } = await supabase.from('users').upsert([
		{
			id: user.id,
			first_name: firstName,
			last_name: lastName,
			date_of_birth: dateOfBirth,
			height,
			weight,
			gender,
			activity_level: activityLevel,
			health_goal: healthGoal,
		},
	])

	if (error) {
		throw new Error(error.message)
	}

	return true
}
