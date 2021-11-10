import styled from 'styled-components'

export const Container = styled.div`
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: rgba(245, 114, 39, 0.8);
`

export const Left = styled.div`
	display: flex;
	justify-content: space-around;
	flex: 1;

	span {
		padding: 5px;
		cursor: pointer;
		transition: all 0.5s ease;

		&:hover {
			background-color: rgba(255, 119, 78, 0.2);
			width: fit-content;
			height: fit-content;
			border-radius: 10px;
		}
	}
`

export const Middle = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;

	.btEntrar {
		margin-right: 30px;
		background-color: white;
		border: solid 1px #ff774e;
		width: 190px;
		height: 36px;
		border-radius: 10px;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.5s ease;

		&:hover {
			color: white;
			background-color: #ff774e;
			border: solid 1px white;
		}
	}
`
