import { updateSession } from '@/utils/supabase/middleware'
import { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
	return await updateSession(req)
}

export const config = {
	matcher: [],
}
