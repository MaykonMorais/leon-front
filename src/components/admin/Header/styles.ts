import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #ff774e;

	width: 100%;
	height: 80px;

	padding: 50px 60px;

	${media.lessThan('medium')`
    padding: 25px 5px;

	`}
`

export const LeftContent = styled.div`
	display: flex;

	${media.lessThan('medium')`
    display: none;

	`}

	width: 40%;
	padding: 4px;
`

export const Logo = styled.img``

export const MiddleContent = styled.div`
	display: flex;
	flex: 1;
`

export const RightContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${media.lessThan('medium')`
    justify-content: center;


  `}
`

export const Item = styled.a`
	padding: 2px 28px 2px 0px;

	&:not(:first-child) {
		padding: 2px 28px;
	}

	font-size: 16px;
	font-weight: 400;
	line-height: 17px;

	${media.lessThan('large')`
    padding: 2px 15px 2px 0px;

    &:not(:first-child) {
		  padding: 2px 15px;
	  }
  `}

	&:after {
		content: ' ';
		display: block;
		position: absolute;

		top: 60px;

		width: 0px;
		height: 3px;
		transition: 1s ease;

		background: linear-gradient(
			360deg,
			#ea1d22 0%,
			rgba(231, 29, 34, 0) 97.46%
		);
	}

	&:hover {
		cursor: pointer;

		&:after {
			content: ' ';
			display: block;
			position: absolute;

			top: 60px;

			width: 35px;
			height: 3px;

			background: linear-gradient(
				360deg,
				#ea1d22 0%,
				rgba(231, 29, 34, 0) 97.46%
			);
		}
	}
`

export const SignInButton = styled.button`
	height: 36px;

	font-weight: 500;
	font-size: 16px;
	line-height: 12px;

	padding: 5px 60px;
	border: 1px solid #ff774e;
	border-radius: 5px;
`

export const ProfilePicture = styled.img`
	border-radius: 50%;

	cursor: pointer;

	width: 45px;
	height: 45px;
`
