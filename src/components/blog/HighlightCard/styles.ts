import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;
	width: 100%;

	${media.lessThan('medium')`
      flex-direction: column;
	`}
`

export const BlogImage = styled.img`
	border-radius: 10px;

	margin-right: 28px;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	padding: 2px 200px 2px 2px;
`

export const DateText = styled.span`
	font-weight: 600;
	font-size: 16px;
	line-height: 32px;

	color: #818181;
`

export const Title = styled.h2`
	cursor: pointer;
	font-weight: 800;
	font-size: 48px;
	line-height: 64px;

	margin-bottom: 16px;

	&:hover::after {
		width: 80%;
	}

	&:after {
		content: '';
		width: 0px;
		height: 3px;
		display: block;
		background: black;
		transition: 2s ease;
	}
`

export const Description = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 32px;
`

export const SeeMore = styled.span``
