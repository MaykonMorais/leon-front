import { useState, useEffect, createContext, ReactNode } from 'react'
import { parseCookies } from 'nookies'

import { config } from '@src/utils/config'

type AuthContextType = {
	isAuth: boolean
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProps {
	children: ReactNode
}

export function AuthProvider({ children }: AuthProps) {
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		const { [`${config.storageUserToken}`]: token } = parseCookies()

		if (token) {
			if (!isAuth) {
				setIsAuth(true)
			}
		} else {
			setIsAuth(false)
		}
	}, [isAuth])

	return (
		<AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
	)
}
