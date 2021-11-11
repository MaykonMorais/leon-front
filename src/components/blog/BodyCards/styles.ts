import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	grid-auto-rows: auto;
	grid-gap: 1rem;
`
