import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	${media.lessThan('medium')`
    display: flex;
    flex-direction: column;

    padding: 25px 8px;
`}

	padding: 10px 60px;
`

export const Title = styled.h2`
	font-weight: 800;
	line-height: 32px;
	font-size: 24px;

	margin-bottom: 8px;
`

export const Body = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
	grid-auto-rows: auto;
	grid-gap: 2.2rem;

	${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      grid-gap: 1.5rem;

      padding: 25px 10px;
	`}

	${media.greaterThan('medium')`

	`}

	padding: 2px;
`
