import Footer from '../components/Footer/Footer'
import Info from '../components/Info/Info'
import Intro from '../components/Intro/Intro'
import TrustedBy from '../components/TrustedBy/TrustedBy'

import Header from '@components/common/Header'

const LandingPage = () => {
	return (
		<div>
			<Header />

			<Intro />
			<TrustedBy />
			<Info />
			<Footer />
		</div>
	)
}

export default LandingPage
