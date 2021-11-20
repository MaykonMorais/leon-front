import Header from '@components/common/Header'
import BodyContainer from '@components/common/BodyContainer'
import HighlightCard from '@components/blog/HighlightCard'
import BodyCards from '@components/blog/BodyCards'

export default function blog() {
	return (
		<>
			<Header />
			<BodyContainer>
				<HighlightCard />
				<BodyCards />
			</BodyContainer>
		</>
	)
}
