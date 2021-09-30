import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../components/footer.scss'
import '../components/info.scss'
import '../components/intro.scss'
import '../components/navbar.scss'
import '../components/trustedBy.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
export default MyApp
