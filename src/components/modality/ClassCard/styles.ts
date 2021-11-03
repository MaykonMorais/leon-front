import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

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

export const Card = styled.div`
	width: 400px;
	height: 400px;

	border-radius: 10px;
`
