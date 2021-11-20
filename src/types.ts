export interface ModelItem {
	num: number
	title: string
	subtitle: string
	locale: string
}
export interface ILogin {
	email: string
	password: string
}

export interface IToken {
	sub: string
	roles: [string]
	iss: string
	exp: number
}

export interface IAction {
	type: string
}

export interface IUserState {
	status: string
	authenticated: boolean
}

export interface IRootState {
	user: IUserState
}
