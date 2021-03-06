import { useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '@actions/user'

import { useRouter } from 'next/router'
import Link from 'next/link'

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

import InputError from '@components/common/InputError'
import { IRootState } from '@src/types'

const signupSchema = yup.object({
	email: yup
		.string()
		.email('Insira um e-mail válido')
		.required('Campo Obrigatório'),
	password: yup.string().required('Campo Obrigatório'),
	retypePassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Ops! As senhas precisam ser iguais'),
})

type RegisterType = {
	email: string
	password: string
	retypePassword: string
}

export default function RegisterBox() {
	const dispatch = useDispatch()
	const router = useRouter()

	const { status } = useSelector((state: IRootState) => state.user)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(signupSchema),
	})

	const onSubmit = ({ email, password }: RegisterType) => {
		dispatch(createUser(email, password))
	}

	if (status === 'registered') {
		router.push('/login')
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
								<InputError error={errors?.email.message} />
							)}

							<Label htmlFor='password'>Digite sua senha</Label>
							<Input {...register('password')} id='password' type='password' />
							{errors.password?.message && (
								<InputError error={errors?.password.message} />
							)}

							<Label htmlFor='retypePassword'>Digite novamente sua senha</Label>
							<Input
								{...register('retypePassword')}
								id='retypePassword'
								type='password'
							/>
							{errors.retypePassword?.message && (
								<InputError error={errors?.retypePassword.message} />
							)}

							<SignInButton type='submit'>Registrar</SignInButton>
						</TopContent>
					</form>

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
