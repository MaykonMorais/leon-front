import Header from '@components/common/Header'
import BodyContainer from '@components/common/BodyContainer'
import HighlightCard from '@components/blog/HighlightCard'

export default function blog() {
	return (
		<>
			<Header />
			<BodyContainer>
				<HighlightCard />
			</BodyContainer>
		</>
	)
}
