import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;

	div {
		width: 1rem;
		height: 1rem;
		margin: 2rem 0.3rem;
		background: #818181;
		border-radius: 50%;
		animation: 0.9s bounce infinite alternate;

		&:nth-child(2) {
			animation-delay: 0.3s;
		}

		&:nth-child(3) {
			animation-delay: 0.6s;
		}
	}
`
