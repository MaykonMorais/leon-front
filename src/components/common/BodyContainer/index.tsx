import { ReactNode } from 'react'
import { Container } from './styles'

interface BodyProps {
	children: ReactNode
	partialBackground?: boolean
}

export default function BodyContainer({
	children,
	partialBackground,
}: BodyProps) {
	return <Container partial={!!partialBackground}>{children}</Container>
}
