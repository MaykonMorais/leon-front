import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	grid-auto-rows: auto;
	grid-gap: 1rem;

	${media.lessThan('medium')`
      display: flex;
      flex-direction: column;

      padding: 25px 10px;
	`}

	padding: 10px 60px;
`
