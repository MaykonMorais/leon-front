import type { AppProps } from 'next/app'

// redux
import { Provider as StoreProvider } from 'react-redux'
import { store } from '@store'

import 'tailwindcss/tailwind.css'
import '@components/Footer/footer.scss'
import '@components/Info/info.scss'
import '@components/Intro/intro.scss'
import '@components/Navbar/navbar.scss'
import '@components/TrustedBy/trustedBy.scss'
import '@components/RegisterBox/registerBox.scss'
import '@components/Item/item.scss'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@src/styles/globalStyles'
import { theme } from '@styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</StoreProvider>
	)
}
export default MyApp
