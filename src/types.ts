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

export interface ITeacher {
	id: number
	name: string
	avatarURL: string
}

export interface IModality {
	id: number
	name: string
	description: string
	imageURL: string
}

export interface IScheduleState {
	data: Array<ISchedule>
}

export interface IModalitiesState {
	data: Array<IModality>
	loading: boolean
	resultSearch: IModality
}

export interface ITeacherState {
	data: Array<ITeacher>
}

export interface IRootState {
	user: IUserState
	schedule: IScheduleState
	modalities: IModalitiesState
	teachers: ITeacherState
}
