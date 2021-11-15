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

export default function RegisterBox() {
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

						<Label htmlFor='password'>Digite sua senha</Label>
						<Input id='password' type='password' />

						<Label htmlFor='retypePassword'>Digite novamente sua senha</Label>
						<Input id='retypePassword' type='password' />

						<SignInButton>Registrar</SignInButton>
					</TopContent>

					<BottomContent>
						<RegisterArea>
							Já tem uma conta? <br />{' '}
							<Link href='/login' passHref>
								<RegisterButton>
									<span>Entre agora</span> <FiArrowRight size={18} />
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
