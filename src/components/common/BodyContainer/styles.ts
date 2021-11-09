import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;

	${media.lessThan('medium')`
      display: flex;
      flex-direction: column;

      padding: 25px 10px;
	`}

	padding: 10px 60px;
`
