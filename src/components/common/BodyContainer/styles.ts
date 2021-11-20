import styled from 'styled-components'
import media from 'styled-media-query'

interface ContainerProps {
	partial: boolean
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;

	${media.lessThan('medium')`
      display: flex;
      flex-direction: column;

      padding: 25px 10px;
	`}

	background: ${({ partial }) =>
		partial
			? 'linear-gradient(#FF774E 40%, transparent 40%) no-repeat'
			: 'inherit'};

	padding: 10px 60px;
`
