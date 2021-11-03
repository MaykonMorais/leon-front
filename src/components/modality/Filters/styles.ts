import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid red;

	${media.lessThan('medium')`
      display: flex;
      flex-direction: column;

      padding: 25px 8px;
	`}

	padding: 10px 60px;
`

export const InputArea = styled.div`
	display: flex;
	flex-direction: column;

	padding: 4px 0px;
`

export const Title = styled.h3`
	font-weight: 700;
	line-height: 40px;
	font-size: 28px;

	margin-bottom: 8px;
`
