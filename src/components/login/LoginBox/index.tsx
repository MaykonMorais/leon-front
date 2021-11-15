import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

import {
	Container,
	Card,
	LeftContent,
	Header,
	RightHeader,
	LeftHeader,
	Logo,
	RightContent,
	LoginText,
	Label,
	Input,
	BackButton,
	SignInButton,
	TopContent,
	BottomContent,
	RegisterArea,
	RegisterButton,
} from './styles'

export default function Box() {
	return (
		<Container>
			<Card>
				<LeftContent>
					<Header>
						<LeftHeader>
							<Link href='/' passHref>
								<BackButton />
							</Link>
						</LeftHeader>
						<RightHeader>
							<Logo src='/Logo.png' />
						</RightHeader>
					</Header>

					<TopContent>
						<LoginText>Por favor, preencha os campos abaixo</LoginText>

						<Label htmlFor='email'>E-mail</Label>
						<Input id='email' type='email' />

						<Label htmlFor='password'>Senha</Label>
						<Input id='password' type='password' />

						<SignInButton>Entrar</SignInButton>
					</TopContent>

					<BottomContent>
						<RegisterArea>
							Não tem uma conta? <br />{' '}
							<Link href='/signup' passHref>
								<RegisterButton>
									<span>Registre-se</span> <FiArrowRight size={18} />
								</RegisterButton>
							</Link>
						</RegisterArea>
					</BottomContent>
				</LeftContent>
				<RightContent src='/login.png' />
			</Card>
		</Container>
	)
}
