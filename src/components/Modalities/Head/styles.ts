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

export const ModalityAreaText = styled.div`
	display: flex;
	flex-direction: column;

	${media.lessThan('medium')`
    width: 100%;
	`}
	width: 50%;
`

export const Title = styled.h3`
	font-size: 40px;
	font-weight: 800;
	line-height: 50px;

	${media.lessThan('medium')`
      font-size: 30px;
	    font-weight: 800;
	    line-height: 58px;
	`}
`

export const Description = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 32px;
	margin-bottom: 8px;

	${media.lessThan('medium')`
      font-size: 16px;
	    font-weight: 400;
	    line-height: 25px;
	`}
`

export const SearchArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${media.lessThan('medium')`
    width: 100%;
	`}

	width: 50%;
`

export const Search = styled.input`
	width: 100%;
	height: 56px;

	${media.greaterThan('large')`
    width: 546px;
    height: 56px;
	`}

	outline: none;
	padding: 0px 25px;

	font-weight: 400;
	background: #ffffff;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
`
