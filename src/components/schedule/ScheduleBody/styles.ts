import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	padding: 40px 90px;

	${media.lessThan('medium')`
      padding: 20px 10px;
  `}
`
