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

export interface ITime {
	begin: string
	end: string
}

export interface ILecture {
	day: number
	classe: string
	location: string
	time: ITime
}

export interface ISchedule {
	lectures: Array<ILecture>
	month: number
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

export interface IScheduleState {
	data: Array<ISchedule>
}

export interface IRootState {
	user: IUserState
	schedule: IScheduleState
}
