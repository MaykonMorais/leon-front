import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 60px;
`
export const Right = styled.div`
	.button {
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
export const Button = styled.div`
	display: flex;
	justify-content: end;
`
export const Left = styled.div`
	justify-content: end;
`
