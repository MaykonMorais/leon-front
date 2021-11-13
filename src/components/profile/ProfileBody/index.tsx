import {
	Container,
	InputContainer,
	PictureContainer,
	ProfilePicture,
	Label,
	Input,
	ButtonContainer,
	SaveButton,
} from './styles'

export default function Profile() {
	return (
		<Container>
			<PictureContainer>
				<ProfilePicture src='https://thispersondoesnotexist.com/image' />
			</PictureContainer>
			<InputContainer>
				<Label htmlFor='name'>Nome</Label>
				<Input id='name' />

				<Label htmlFor='email' type='email'>
					E-mail
				</Label>
				<Input id='email' />

				<Label htmlFor='address'>Endereço</Label>
				<Input id='address' />

				<ButtonContainer>
					<SaveButton>Salvar</SaveButton>
				</ButtonContainer>
			</InputContainer>
		</Container>
	)
}
