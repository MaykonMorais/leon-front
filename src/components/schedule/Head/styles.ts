import styled from 'styled-components'
import media from 'styled-media-query'

interface InfoMarkdownProps {
	bold?: boolean
}

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	${media.lessThan('medium')`
    flex-direction: column;
  `}

	padding: 4px 0px;
	margin-bottom: 16px;
`

export const LeftContent = styled.div``

export const RigthContent = styled.div`
	display: flex;
	flex-direction: column;
`

export const DayText = styled.p`
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;

	${media.lessThan('medium')`
    margin-bottom: 8px;

    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
  `}
`

export const InfoMarkdown = styled.span<InfoMarkdownProps>`
	font-size: 15px;
	line-height: 20px;

	${media.lessThan('medium')`
      width: 100%;
      font-size: 14px;
      line-height: 24px;
  `}

	font-weight: ${({ bold }) => (bold ? '700' : '400')};
`

export const RescheduleButton = styled.button`
	border: 1px solid #25b002;
	border-radius: 5px;
	padding: 4px;

	font-size: 16px;

	${media.lessThan('medium')`
      font-size: 14px;
  `}

	margin-top: 4px;
`
