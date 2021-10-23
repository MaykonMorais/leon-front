import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../components/Footer/footer.scss'
import '../components/Info/info.scss'
import '../components/Intro/intro.scss'
import '../components/Navbar/navbar.scss'
import '../components/TrustedBy/trustedBy.scss'
import '../components/RegisterBox/registerBox.scss'
import '../components/item.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
export default MyApp
