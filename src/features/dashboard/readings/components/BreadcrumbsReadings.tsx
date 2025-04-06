'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from '@/ui/breadcrumb'
import Link from 'next/link'

export function BreadcrumbsReadings() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className='text-foreground-muted hover:text-foreground transition-all'>
					<Link href='/dashboard'>Dashboard</Link>
				</BreadcrumbItem>
				<span>/</span>
				<BreadcrumbItem className='text-foreground underline'>
					<Link href='/dashboard/readings'>Readings</Link>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
