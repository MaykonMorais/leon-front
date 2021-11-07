import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #ffffff;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
	border-radius: 10px;

	padding: 16px;

	${media.lessThan('medium')`
      margin-bottom: 40px;
	`}
`

export const Section = styled.div`
	display: flex;
	justify-content: space-between;
`

export const SectionArea = styled.div`
	position: relative;
`
export const SectionText = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 12px;
`
export const SectionDescription = styled.p`
	font-weight: 500;
	font-size: 16px;
	line-height: 29px;
	color: ${({ color }) => color || 'inherit'};

	margin-left: 8px;
`

export const RegisterButton = styled.button`
	width: 100%;
	background: #ff774e;
	border-radius: 5px;
	padding: 6px;

	color: #fff;

	&:hover {
		background: #dd6945;
	}
`

export const TeacherPhoto = styled.img`
	position: relative;
	top: -50px;

	border: 1px solid #dd6945;

	border-radius: 50%;
	width: 120px;
	height: 120px;
`
