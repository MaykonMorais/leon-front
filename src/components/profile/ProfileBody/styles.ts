import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;
`

export const PictureContainer = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;
	align-items: center;

	flex: 1;
`
export const UploadLabel = styled.label`
	background: #ff774e;
	color: white;
	padding: 8px 16px;

	border-radius: 0.3rem;
	cursor: pointer;
	margin-top: 1rem;
`

export const UploadButton = styled.input``

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	flex: 1;
`
export const ProfilePicture = styled.img`
	border-radius: 50%;
	width: 70%;

	${media.greaterThan('huge')`
    width: 60%;
  `}
`

export const Input = styled.input`
	background: #ffffff;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;

	outline: none;
	padding: 12px;

	margin-bottom: 32px;
`

export const Label = styled.label`
	font-size: 18px;
	line-height: 32px;
`

export const SaveButton = styled.button`
	background: #ff774e;
	color: #fff;

	font-size: 16px;
	font-weight: 500;

	padding: 8px 64px;

	border-radius: 10px;

	&:hover {
		background: #dd6945;
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`
