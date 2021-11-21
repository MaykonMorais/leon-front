export interface ModelItem {
	num: number
	title: string
	subtitle: string
	locale: string
}

export interface MonthScheduled {
	month: string
	days: Array<ModelItem>
}
export interface ILogin {
	email: string
	password: string
}

export interface IToken {
	sub: string
	roles: Array<string>
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
