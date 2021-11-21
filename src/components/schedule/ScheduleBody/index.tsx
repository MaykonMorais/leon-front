import { ReactNode } from 'react'
import { Container } from './styles'

interface ScheduleProps {
	children: ReactNode
}

export default function ScheduleBody({ children }: ScheduleProps) {
	return <Container>{children}</Container>
}
