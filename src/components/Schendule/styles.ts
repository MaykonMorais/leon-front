import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`
export const Right = styled.div`
	flex-direction: column;

	.button {
		margin-right: 30px;
		background-color: white;
		border: solid 1px #25b002;
		width: 190px;
		height: 36px;
		border-radius: 10px;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.5s ease;

		&:hover {
			color: white;
			background-color: #25b002;
			border: solid 1px white;
		}
	}
`
export const Left = styled.div`
	font-family: 'Montserrat', sans-serif;
`
