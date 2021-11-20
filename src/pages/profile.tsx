import Header from '@components/common/Header'
import BodyContainer from '@components/common/BodyContainer'
import ProfileBody from '@src/components/profile/ProfileBody'

export default function Profile() {
	return (
		<>
			<Header />

			<BodyContainer>
				<ProfileBody />
			</BodyContainer>
		</>
	)
}
