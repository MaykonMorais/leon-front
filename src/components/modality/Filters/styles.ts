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

export const LeftContent = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;

	padding-right: 80px;
`

export const InputArea = styled.div`
	display: flex;
	flex-direction: column;

	flex: 1;

	padding: 4px 0px;
`

export const Title = styled.h3`
	font-weight: 800;
	line-height: 32px;
	font-size: 24px;

	margin-bottom: 8px;
`
export const TempDescription = styled.p`
	font-weight: 400;
	line-height: 29px;
	font-size: 17px;
`
