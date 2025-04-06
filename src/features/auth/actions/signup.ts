'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { SignupDto, SignupDtoSchema } from '../dtos/signup.dto'

export async function signupAction(dto: SignupDto) {
	const { data, error: parseError } = SignupDtoSchema.safeParse(dto)

	if (parseError) {
		throw new Error(parseError.message)
	}

	const supabase = await createClient()

	const { error } = await supabase.auth.signUp({
		email: data.email,
		password: data.password,
	})

	redirect('/onboarding/1')
}
