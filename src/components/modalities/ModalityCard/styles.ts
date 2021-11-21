import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	position: relative;
	transition: all ease-in 0.7s;

	&:hover {
		top: -2px;
	}
`

export const CardImg = styled.img`
	width: auto;
	height: auto;
	border-radius: 10px;
`

export const CardBody = styled.div`
	margin: 8px 0px;
`

export const CardTitle = styled.h2`
	font-size: 24px;
	font-weight: 800;
	line-height: 32px;
`

export const CardDescription = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 32px;
`

export const SeeMoreButton = styled.a`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	color: #ff774e;
	padding-right: 4px;

	font-size: 16px;
	font-weight: 400;
	line-height: 32px;
	cursor: pointer;

	transition: ease 0.7s;

	&:hover {
		color: #74311d;
	}
`
