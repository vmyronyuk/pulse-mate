'use server'

import { createClient } from '@/utils/supabase/server'
import { unauthorized } from 'next/navigation'
import {
	PersonalInformationDto,
	PersonalInformationDtoSchema,
} from '../dtos/personal-information.dto'

export const savePersonalInformationOnboardingAction = async (
	dto: PersonalInformationDto
) => {
	const supabase = await createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}
	const { data, error: parseError } =
		PersonalInformationDtoSchema.safeParse(dto)

	if (parseError) {
		throw parseError
	}

	const finalData = {
		...data,
		dateOfBirth: new Date(data.dateOfBirth),
	}

	const { error } = await supabase.from('users').upsert([
		{
			id: user.id,
			first_name: finalData.firstName,
			last_name: finalData.lastName,
			date_of_birth: finalData.dateOfBirth,
			height: finalData.height,
			weight: finalData.weight,
			gender: finalData.gender,
			activity_level: finalData.activityLevel,
			health_goal: finalData.healthGoal,
		},
	])

	if (error) {
		throw new Error(error.message)
	}
}
