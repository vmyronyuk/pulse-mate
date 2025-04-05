import { Card } from '@/features/dashboard/components/Card'
import { HealthMetricsChart } from '@/features/dashboard/overview/components/Charts/HealhMetricChart'
import { RecentReadings } from '@/features/dashboard/overview/components/Readings/RecentReadings'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/ui/button'
import { Field } from '@/ui/form/Field'
import { Input } from '@/ui/form/Input'
import { Label } from '@/ui/form/Label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { Textarea } from '@/ui/textarea'
import { Heading } from '@/ui/typography/Heading'
import { Paragraph } from '@/ui/typography/Paragraph'
import { WrapperCard } from '@/ui/WrapperCard'
import {
	Activity,
	Footprints,
	GlassWater,
	Heart,
	Moon,
	Plus,
	Weight,
} from 'lucide-react'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
	const user = await supabase.auth.getUser()
	if (!user) redirect('/auth/signin')
	return (
		<div className='px-4 sm:px-12 mt-4 flex flex-col gap-6'>
			<div className='flex flex-col gap-1'>
				<span className='text-3xl font-semibold'>Hi, Vet 👋</span>
				<span className='font-semibold'>Hope you are doing well today 😊</span>
			</div>
			<div className='flex flex-col gap-12'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
					<Card
						title='Heart Rate'
						value='72 BPM'
						icon={<Heart className='w-5 h-5 text-primary' />}
						substring='Normal range'
					/>
					<Card
						title='Blood pressure'
						value='120/80'
						icon={<Activity className='w-5 h-5 text-primary' />}
						substring='Normal range'
					/>
					<Card
						title='Weight'
						value='83 kg'
						icon={<Weight className='w-5 h-5 text-primary' />}
						substring='Normal range'
					/>
					<Card
						title='Water Intake'
						value='1.8'
						icon={<GlassWater className='w-5 h-5 text-primary' />}
						substring='Normal range'
					/>
					<Card
						title='Sleep Hours'
						value='7.1'
						icon={<Moon className='w-5 h-5 text-primary' />}
						substring='Normal range'
					/>
					<Card
						title='Steps'
						value='7814'
						icon={<Footprints className='w-5 h-5 text-primary' />}
						substring='Normal range'
					/>
				</div>
				<Tabs defaultValue='overview' className='flex flex-col gap-4'>
					<div className='flex justify-between items-center'>
						<TabsList className='grid grid-cols-2 min-w-[8rem] sm:min-w-[23rem]'>
							<TabsTrigger value='overview'>Overview</TabsTrigger>
							<TabsTrigger value='newEntry'>New Entry</TabsTrigger>
						</TabsList>
						<Button className='flex items-center gap-2'>
							<Plus />
							<span>Add Reading</span>
						</Button>
					</div>
					<TabsContent value='overview'>
						<div className='grid md:grid-cols-2 gap-4 lg:grid-cols-7'>
							<div className='lg:col-span-4'>
								<WrapperCard>
									<Heading level={2} variant='h2'>
										Health Metrics
									</Heading>
									<Paragraph className='mb-4'>
										Your health metrics over the past 30 days
									</Paragraph>
									<HealthMetricsChart />
								</WrapperCard>
							</div>
							<div className='lg:col-span-3'>
								<WrapperCard>
									<Heading level={2} variant='h2'>
										Recent Readings
									</Heading>
									<Paragraph className='mb-4'>
										Your most recent health measurements
									</Paragraph>
									<RecentReadings />
								</WrapperCard>
							</div>
						</div>
					</TabsContent>
					<TabsContent value='newEntry'>
						<div className='border p-5 rounded-md border-secondary'>
							<Heading level={2} variant='h2'>
								Add New Health Data
							</Heading>
							<Paragraph>Manually enter your health measurements</Paragraph>
							<form className='mt-4 flex flex-col gap-6'>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
									<Field>
										<Label>Date</Label>
										<Input placeholder='April 3rd, 2025' />
									</Field>
									<Field>
										<Label>Heart Rate (BPM)</Label>
										<Input placeholder='72' />
									</Field>
								</div>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
									<div className='grid grid-cols-2 gap-3'>
										<Field>
											<Label>Systolic (mmHg)</Label>
											<Input placeholder='80' />
										</Field>
										<Field>
											<Label>Diastolic (mmHg)</Label>
											<Input placeholder='80' />
										</Field>
									</div>
									<Field>
										<Label>Weight (kg)</Label>
										<Input placeholder='80' />
									</Field>
								</div>
								<div className='grid grid-cols-1 gap-3'>
									<Field>
										<Label>Steps</Label>
										<Input placeholder='7814' />
									</Field>
									<Field>
										<Label>Water intake</Label>
										<Input placeholder='1.8' />
									</Field>
									<Field>
										<Label>Sleep hours</Label>
										<Input placeholder='7.1' />
									</Field>
								</div>
								<Field>
									<Label>Notes</Label>
									<Textarea
										rows={3}
										placeholder='Add any additional notes about your health'
									/>
								</Field>
								<Button className='w-full sm:w-fit self-end'>
									Save health data
								</Button>
							</form>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
