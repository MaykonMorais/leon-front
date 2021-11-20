import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiArrowRight } from 'react-icons/fi'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '@actions/user'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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

import InputError from '@src/components/common/InputError'
import { ILogin, IRootState } from '@types'

const loginSchema = yup.object({
	email: yup
		.string()
		.email('Insira um e-mail válido')
		.required('Campo Obrigatório'),
	password: yup.string().required('Campo obrigatório'),
})

export default function Box() {
	const { authenticated } = useSelector((state: IRootState) => state.user)
	const dispatch = useDispatch()

	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	})

	const onSubmit = ({ email, password }: ILogin) => {
		dispatch(login(email, password))
	}

	if (authenticated) {
		router.push('/admin-home')
	}

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
					<form onSubmit={handleSubmit(onSubmit)}>
						<TopContent>
							<LoginText>Por favor, preencha os campos abaixo</LoginText>

							<Label htmlFor='email'>E-mail</Label>
							<Input {...register('email')} id='email' type='email' />
							{errors.email?.message && (
								<InputError error={errors.email?.message} />
							)}

							<Label htmlFor='password'>Senha</Label>
							<Input {...register('password')} id='password' type='password' />
							{errors.password?.message && (
								<InputError error={errors.password?.message} />
							)}

							<SignInButton type='submit'>Entrar</SignInButton>
						</TopContent>
					</form>

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
