'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { SigninDto, SigninDtoSchema } from '../dtos/signin.dto'

export async function signinAction(dto: SigninDto) {
	const { data, error: parseError } = SigninDtoSchema.safeParse(dto)

	if (parseError) {
		throw new Error(parseError.message)
	}

	const supabase = await createClient()

	const { error } = await supabase.auth.signInWithPassword({
		email: data.email,
		password: data.password,
	})

	redirect('/dashboard/1')
}
