import { createClient } from '@/utils/supabase/server'
import { unauthorized } from 'next/navigation'
import { NewHealthDataDto } from '../dtos/new-health-data.dto'
import { UserHistoricDataDto } from '../dtos/user.dto'

export async function getUserHistoricData(): Promise<UserHistoricDataDto | null> {
	const supabase = await createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		unauthorized()
	}

	const { data: userHistoricHealthData, error: fetchError } = await supabase
		.from('users')
		.select('historic_health_data')
		.eq('id', user.id)
		.single()

	if (fetchError) {
		throw new Error(fetchError.message)
	}

	if (userHistoricHealthData) {
		const historicHealthData: NewHealthDataDto[] =
			userHistoricHealthData.historic_health_data ?? []

		return {
			historic_health_data: historicHealthData,
		}
	}

	return null
}
