import Header from '@components/common/Header'
import BodyContainer from '@components/common/BodyContainer'
import { ModelItem } from '@types'

import HeadSchedule from '@components/schedule/Head'
import ScheduleBody from '@components/schedule/ScheduleBody'
import ScheduleCard from '@components/schedule/ScheduleCard'

const LandingPage = () => {
	const data: Array<ModelItem> = [
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
		{
			title: 'Judô',
			num: 22,
			subtitle: '17:30 - 18:30',
			locale: 'Sede Principal',
		},
	]

	return (
		<div>
			<Header />
			<BodyContainer>
				<ScheduleBody>
					<HeadSchedule />

					{data.map((item, index) => {
						return (
							<ScheduleCard
								key={index}
								item={item}
								haveLocale={true}
								haveTrash={true}
							/>
						)
					})}
				</ScheduleBody>
			</BodyContainer>
		</div>
	)
}

export default LandingPage
