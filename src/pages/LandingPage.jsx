import Footer from '../components/Footer'
import Info from '../components/Info'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import TrustedBy from '../components/TrustedBy'

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Intro />
			<TrustedBy />
			<Info />
			<Footer />
		</div>
	)
}

export default LandingPage
