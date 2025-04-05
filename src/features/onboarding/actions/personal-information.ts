'use server'

import { supabase } from '@/lib/supabaseClient'
import { unauthorized } from 'next/navigation'
import {
	PersonalInformationDto,
	PersonalInformationDtoSchema,
} from '../dtos/personal-information.dto'

export const savePersonalInformationOnboardingAction = async (
	dto: PersonalInformationDto
) => {
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	console.log(user)

	const { data, error: parseError } =
		PersonalInformationDtoSchema.safeParse(dto)

	if (parseError) {
		throw parseError
	}

	const { error } = await supabase.from('users').upsert([
		{
			id: user.id,
			first_name: data.firstName,
			last_name: data.lastName,
			date_of_birth: data.dateOfBirth,
			height: data.height,
			weight: data.weight,
			gender: data.gender,
			activity_level: data.activityLevel,
			health_goal: data.healthGoal,
		},
	])

	if (error) {
		throw new Error(error.message)
	}
}
