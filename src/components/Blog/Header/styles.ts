import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-around;

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

export const Logo = styled.img`
	display: flex;
`

export const RightContent = styled.div`
	display: flex;

	${media.lessThan('medium')`
    justify-content: center;
    width: 50%;

  `}

	width: 60%;
`

export const Item = styled.div`
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
