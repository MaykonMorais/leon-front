import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-rows: auto;
	grid-gap: 1rem;

	padding: 40px;
`

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	background: linear-gradient(180deg, #fcf8f5 0%, #f9f6ee 100%);

	padding: 8px;

	box-shadow: -2px 4px 45px rgba(0, 0, 0, 0.13);
	border-radius: 15px;

	text-decoration: none;
	z-index: 0;
	overflow: hidden;
	border: 1px solid #f2f8f9;

	&:hover {
		cursor: pointer;
		transition: all 0.2s ease-out;
		box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
		top: -4px;
		border: 1px solid #cccccc;
		background-color: white;
	}
`

export const Icon = styled.img``

export const TitleCard = styled.h2`
	font-size: 24px;
	font-weight: 700;
	line-height: 24px;

	margin: 8px 0px;
`

export const DescriptionCard = styled.p`
	text-align: center;
	font-size: 15px;
	font-weight: 400;
	line-height: 22px;

	width: 85%;

	margin-bottom: 8px;
`
