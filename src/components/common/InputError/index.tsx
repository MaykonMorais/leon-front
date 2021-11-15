import { Container } from './styles'

interface InputErrorProps {
	error: string
}
export default function InputError({ error }: InputErrorProps) {
	return <Container>{error}</Container>
}
