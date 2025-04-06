import {
	Activity,
	Footprints,
	GlassWater,
	Heart,
	Moon,
	Weight,
} from 'lucide-react'
import { UserDto } from '../../dtos/user.dto'
import { Card } from '../Card'

type HealthCardsProps = {
	heartRate: UserDto['heartRate']
	bloodPressure: UserDto['bloodPressure']
	weight: UserDto['weight']
	waterIntake: UserDto['waterIntake']
	sleepHours: UserDto['sleepHours']
	steps: UserDto['steps']
}

export function HealthCards({
	heartRate,
	bloodPressure,
	weight,
	waterIntake,
	sleepHours,
	steps,
}: HealthCardsProps) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
			<Card
				title='Heart Rate'
				value={`${heartRate} BPM`}
				icon={<Heart className='w-5 h-5 text-red-600' />}
				substring='Normal range'
			/>
			<Card
				title='Blood pressure'
				value={`${bloodPressure.systolic}/${bloodPressure.diastolic} mmHg`}
				icon={<Activity className='w-5 h-5 text-blue-600' />}
				substring='Normal range'
			/>
			<Card
				title='Weight'
				value={`${weight} kg`}
				icon={<Weight className='w-5 h-5 text-primary' />}
				substring='Normal range'
			/>
			<Card
				title='Water Intake'
				value={`${waterIntake} L`}
				icon={<GlassWater className='w-5 h-5 text-sky-300' />}
				substring='Normal range'
			/>
			<Card
				title='Sleep Hours'
				value={`${sleepHours} hours`}
				icon={<Moon className='w-5 h-5 text-yellow-400' />}
				substring='Normal range'
			/>
			<Card
				title='Steps'
				value={`${steps}`}
				icon={<Footprints className='w-5 h-5 text-gray-300' />}
				substring='Normal range'
			/>
		</div>
	)
}
