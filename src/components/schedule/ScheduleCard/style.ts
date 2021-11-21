import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;

	padding: 8px;

	background-color: #ffffff;
	align-items: center;
	justify-content: space-between;

	box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
	border-radius: 10px;

	font-weight: bold;
	margin-bottom: 16px;
`
export const Father = styled.div`
	display: flex;
	align-items: center;
`

export const Titles = styled.div`
	display: flex;
	flex-direction: column;

	align-items: flex-start;
	justify-content: space-between;

	padding: 20;
`
export const Number = styled.span`
	display: flex;
	justify-content: space-around;

	flex: 1;
	width: 80px;
	height: 80px;
	align-items: center;

	color: #818181;
	font-weight: lighter;
	font-size: 32px;
`

export const Title = styled.span`
	font-weight: lighter;
	margin-left: 8px;
`

export const Subtitle = styled.span`
	color: #818181;
	font-weight: lighter;
`

export const Locale = styled.div`
	margin-left: 15px;
	justify-content: space-between;
`

export const ContainerEnd = styled.div`
	display: flex;
	width: 30px;
`
