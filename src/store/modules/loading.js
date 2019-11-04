const loading = {
	state: {
		loading: true,
	},
	getters: {
		loading: state => state.loading,
	},
	mutations: {
		changeLoading: (state, loading) => {
			state.loading = loading;
		},
	}
}

export default loading;