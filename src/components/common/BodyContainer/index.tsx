import { ReactNode } from 'react'
import { Container } from './styles'

interface BodyProps {
	children: ReactNode
}

export default function BodyContainer({ children }: BodyProps) {
	return <Container>{children}</Container>
}
