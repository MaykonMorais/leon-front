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

export const ImageDetail = styled.img`
	width: 100%;
	height: auto;

	border-radius: 10px;
`

export const LeftContent = styled.div`
	display: flex;
	flex: 1;
`

export const Title = styled.h2`
	font-size: 28px;
	font-weight: 700;
	line-height: 40px;
`
export const RightContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 2px 0px 2px 40px;

	${media.lessThan('medium')`
    padding: 4px;
  `}
`

export const Description = styled.p`
	font-size: 17px;
	font-weight: 400;
	line-height: 29px;
`
