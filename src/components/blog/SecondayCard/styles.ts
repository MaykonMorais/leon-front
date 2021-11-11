import styled from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	padding: 4px 8px;
	transition: 0.8s ease-in;
	cursor: pointer;

	&:hover {
		box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
	}
`

export const CardImg = styled.img`
	border-radius: 10px;

	margin-bottom: 8px;
`

export const Title = styled.h2`
	font-style: normal;
	font-weight: bold;
	font-size: 28px;
	line-height: 40px;

	&:hover {
		color: rgba(0, 0, 0, 0.7);
	}
`

export const Description = styled.span`
	font-weight: 400;
	font-size: 16px;
	line-height: 32px;
`
