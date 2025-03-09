import { SignupDtoType } from '@/features/auth/dtos/signup.dto'
import { supabase } from '@/lib/supabaseClient'

export async function signup({ email, password }: SignupDtoType) {
	const { data, error } = await supabase.auth.signUp({ email, password })

	if (error) throw error
	return data
}
