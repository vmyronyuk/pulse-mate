import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
	const supabase = await createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		return NextResponse.redirect(new URL('/auth/signin', req.url))
	}

	await updateSession(req)

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard', '/onboarding/:id'],
}
