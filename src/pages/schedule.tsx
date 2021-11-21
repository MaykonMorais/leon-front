import { useEffect, useCallback } from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { config } from '@utils/config'

import { useDispatch, useSelector } from 'react-redux'
import { getSchedule } from '@actions/schedule'

import Header from '@components/common/Header'
import BodyContainer from '@components/common/BodyContainer'
import { IRootState } from '@types'

import HeadSchedule from '@components/schedule/Head'
import ScheduleBody from '@components/schedule/ScheduleBody'
import ScheduleCard from '@components/schedule/ScheduleCard'
import MonthTitle from '@components/schedule/MonthScheduled'

const Schedule = () => {
	const dispatch = useDispatch()
	const { data } = useSelector((state: IRootState) => state.schedule)

	useEffect(() => {
		dispatch(getSchedule())
	}, [dispatch])

	const getMonthName = (monthNumber: number) => {
		return Intl.DateTimeFormat('pt-br', { month: 'long' }).format(
			new Date(monthNumber)
		)
	}

	return (
		<div>
			<Header />
			<BodyContainer>
				<ScheduleBody>
					<HeadSchedule />

					{data.length > 0 && (
						<>
							{data.map(({ month, lectures }, index) => {
								return (
									<>
										<MonthTitle key={index} month={getMonthName(month)} />

										{lectures.map((lecture, index) => {
											return (
												<ScheduleCard
													duration={0.7 + 0.4 * index}
													key={index}
													item={lecture}
													haveLocale
													haveTrash
												/>
											)
										})}
									</>
								)
							})}
						</>
					)}
				</ScheduleBody>
			</BodyContainer>
		</div>
	)
}

export default Schedule

export const getServerSideProps: GetServerSideProps = async ctx => {
	const { [`${config.storageUserToken}`]: token } = parseCookies(ctx)

	if (!token) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		}
	}

	return {
		props: {},
	}
}
