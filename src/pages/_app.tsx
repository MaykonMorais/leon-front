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

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@src/styles/globalStyles'
import { theme } from '@styles/theme'
import { AuthProvider } from '@src/contexts/AuthContext'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StoreProvider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<AuthProvider>
					<Component {...pageProps} />
					<ToastContainer
						position='top-right'
						autoClose={4000}
						hideProgressBar={false}
						pauseOnFocusLoss
						closeOnClick
						pauseOnHover
					/>
				</AuthProvider>
			</ThemeProvider>
		</StoreProvider>
	)
}
export default MyApp
