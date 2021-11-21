export const config = {
	API_URL: process.env.NEXT_PUBLIC_API_URL,

	tokenType: 'Bearer',

	storageUser: '@LEON:User',
	storageUserToken: '@LEON:Token',

	endpoints: {
		auth: '/auth',
		users: '/users',
		schedules: '/schedules',
	},
}
