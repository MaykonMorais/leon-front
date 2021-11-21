import Header from '@components/common/Header'
import BodyContainer from '@components/common/BodyContainer'
import { ModelItem, MonthScheduled } from '@types'

import HeadSchedule from '@components/schedule/Head'
import ScheduleBody from '@components/schedule/ScheduleBody'
import ScheduleCard from '@components/schedule/ScheduleCard'
import MonthTitle from '@components/schedule/MonthScheduled'

const Schedule = () => {
	const months: Array<MonthScheduled> = [
		{
			month: 'Fevereiro',
			days: [
				{
					title: 'Judô',
					num: 24,
					subtitle: '14:20 - 13:20',
					locale: 'Sede Principal',
				},
				{
					title: 'Iôga',
					num: 29,
					subtitle: '11:00 - 12:00',
					locale: 'Sede Principal',
				},
			],
		},
		{
			month: 'Março',
			days: [
				{
					title: 'Judô',
					num: 24,
					subtitle: '14:20 - 13:20',
					locale: 'Sede Principal',
				},
				{
					title: 'Iôga',
					num: 29,
					subtitle: '11:00 - 12:00',
					locale: 'Sede Principal',
				},
			],
		},
	]

	return (
		<div>
			<Header />
			<BodyContainer>
				<ScheduleBody>
					<HeadSchedule />

					{months.map(({ month, days }, index) => {
						return (
							<>
								<MonthTitle key={index} month={month} />

								{days.map((day, index) => {
									return (
										<ScheduleCard
											duration={0.7 + 0.4 * index}
											key={index}
											item={day}
											haveLocale
											haveTrash
										/>
									)
								})}
							</>
						)
					})}
				</ScheduleBody>
			</BodyContainer>
		</div>
	)
}

export default Schedule
