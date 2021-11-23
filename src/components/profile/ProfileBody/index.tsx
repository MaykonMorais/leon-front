import { useRouter } from 'next/router'
import { destroyCookie } from 'nookies'
import { config } from '@utils/config'

import { useDispatch } from 'react-redux'
import { setAuth } from '@actions/user'

import {
	Container,
	InputContainer,
	PictureContainer,
	ProfilePicture,
	Label,
	Input,
	ButtonContainer,
	SaveButton,
	UploadLabel,
	UploadButton,
	SignOutButton,
} from './styles'

export default function Profile() {
	const router = useRouter()
	const dispatch = useDispatch()

	const signOutHandle = (event: any) => {
		destroyCookie(null, config.storageUserToken)
		destroyCookie(null, config.storageUser)

		dispatch(setAuth(false))

		router.replace('/')
	}

	return (
		<Container>
			<PictureContainer>
				<ProfilePicture src='https://thispersondoesnotexist.com/image' />

				<UploadLabel htmlFor='picture'>
					<span>Upload</span>
				</UploadLabel>
				<UploadButton id='picture' type='file' hidden />
			</PictureContainer>
			<InputContainer>
				<ButtonContainer>
					<SignOutButton onClick={signOutHandle}>Sair</SignOutButton>
				</ButtonContainer>
				<Label htmlFor='name'>Nome</Label>
				<Input placeholder='João Pedro da Silva' id='name' />

				<Label htmlFor='email'>E-mail</Label>
				<Input placeholder='email@email.com' id='email' type='email' />

				<Label htmlFor='address'>Endereço</Label>
				<Input placeholder='Rua Manoel Bezzera Neto, N° 222' id='address' />

				<ButtonContainer>
					<SaveButton>Salvar</SaveButton>
				</ButtonContainer>
			</InputContainer>
		</Container>
	)
}
