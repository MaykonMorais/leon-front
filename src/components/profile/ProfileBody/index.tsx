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
} from './styles'

export default function Profile() {
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
				<Label htmlFor='name'>Nome</Label>
				<Input id='name' />

				<Label htmlFor='email'>E-mail</Label>
				<Input id='email' type='email' />

				<Label htmlFor='address'>Endereço</Label>
				<Input id='address' />

				<ButtonContainer>
					<SaveButton>Salvar</SaveButton>
				</ButtonContainer>
			</InputContainer>
		</Container>
	)
}
