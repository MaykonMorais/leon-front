import Footer from '../components/Footer/Footer'
import Info from '../components/Info/Info'
import Intro from '../components/Intro/Intro'
import Navbar from '../components/Navbar/Navbar'
import TrustedBy from '../components/TrustedBy/TrustedBy'

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
