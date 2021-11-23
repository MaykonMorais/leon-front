export const config = {
	API_URL:
		'https://ufersa-leon.herokuapp.com' || process.env.NEXT_PUBLIC_API_URL,

	tokenType: 'Bearer',

	storageUser: '@LEON:User',
	storageUserToken: '@LEON:Token',

	endpoints: {
		auth: '/auth',
		users: '/users',
		schedules: '/schedules',
		modalities: '/modalities',
		teachers: '/teachers',
		gyms: '/gyms',
	},
}
