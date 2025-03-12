import { SigninDtoType } from '@/features/auth/dtos/signin.dto'
import { supabase } from '@/lib/supabaseClient'

export async function signin({ email, password }: SigninDtoType) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})

	console.error(error)
	console.log(data)
	return data
}
