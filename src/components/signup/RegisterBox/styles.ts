import styled from 'styled-components'
import media from 'styled-media-query'

import { FiChevronLeft } from 'react-icons/fi'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;

	background: #f9cb4a;
`

export const Card = styled.div`
	display: flex;
	justify-content: space-between;
	background: #fff;

	border-radius: 15px;
	padding: 32px;

	${media.between('medium', 'large')`
    width: 90%;
  `}

	${media.lessThan('medium')`
      width: 90%;
      height: 90%;

      padding: 16px;
  `}

  width: 60%;
`

export const BackButton = styled(FiChevronLeft)`
	font-size: 24px;
	cursor: pointer;
`

export const TopContent = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-between;
`

export const BottomContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	flex: 1;
`

export const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 16px;

	${media.lessThan('medium')`
    padding-right: 0px;
  `}

	flex: 1;
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	width: 100%;

	justify-content: space-between;

	margin-bottom: 12px;
`

export const RightHeader = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 60%;

	${media.lessThan('medium')`
      justify-content: flex-end;

      width: 40%;
  `}
`

export const LeftHeader = styled.div`
	display: flex;
	width: 40%;

	${media.lessThan('medium')`
      flex: 1;
  `}

	justify-content: flex-start;
	font-size: 14px;
`

export const Logo = styled.img``

export const RightContent = styled.img`
	border-radius: 10px;
	height: 550px;

	${media.between('medium', 'large')`
      height: 450px;
  `}

	${media.lessThan('medium')`
    display: none;
  `}
`

export const LoginText = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 32px;

	${media.lessThan('medium')`
    font-size: 15px;

  `}

	margin-bottom: 4px;
`

export const Label = styled.label`
	font-weight: 500;
	font-size: 17px;
	line-height: 32px;

	margin-bottom: 4px;

	&:not(&:first-child) {
		margin-top: 12px;
	}
`

export const Input = styled.input`
	border: 1px solid #000;
	border-radius: 10px;

	outline: none;

	padding: 8px 16px;
`

export const SignInButton = styled.button`
	width: 40%;

	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #fff;

	margin-top: 24px;

	border-radius: 5px;
	padding: 8px 16px;

	background: #ff774e;

	&:hover {
		background: #f3734c;
	}
`

export const RegisterArea = styled.span`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
`

export const RegisterButton = styled.a`
	display: flex;
	align-items: center;
	color: #ff774e;

	&:hover {
		color: #74311d;
	}
`
