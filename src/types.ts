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

export interface IGym {
	id: number
	name: string
	address: string
}

export interface IScheduleState {
	data: Array<ISchedule>
}

export interface IGymState {
	data: Array<IGym>
}

export interface Interval {
	id: number
	month: number
	day: number
	initialTime: string
	finalTime: string
}

export interface IClass {
	id: number
	gym: IGym
	price: number
	teacher: ITeacher
	intervals: Array<Interval>
}

export interface IModalitiesState {
	data: Array<IModality>
	loading: boolean
	resultSearch: IModality
	searchedClasses: Array<IClass>
}

export interface ITeacherState {
	data: Array<ITeacher>
}

export interface IRootState {
	user: IUserState
	schedule: IScheduleState
	modalities: IModalitiesState
	teachers: ITeacherState
	gyms: IGymState
}
