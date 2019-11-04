const tagsView = {
	state: {
		visitedViews: [],
		cachedViews: []
	},
	getters: {
		visitedViews: state => state.tagsView.visitedViews,
		cachedViews: state => state.tagsView.cachedViews,
	},
	mutations: {
		ADD_VISITED_VIEWS: (state, view) => {
			if(state.visitedViews.some(v => v.path === view.path)) return //some判断其是否满足   返回一个布尔值
			state.visitedViews.push({
				name: view.name,
				path: view.path,
				title: view.meta.title || 'no-name',
				label: view.meta.label || '',
			})
			if(!!view.meta.cache) {
				state.cachedViews.push(view.name)
			}
		},
		DEL_VISITED_VIEWS: (state, view) => {
			for(const [i, v] of state.visitedViews.entries()) {
				if(v.path === view.path) {
					state.visitedViews.splice(i, 1)
					break
				}
			}
			for(const i of state.cachedViews) {
				if(i === view.name) {
					const index = state.cachedViews.indexOf(i)
					state.cachedViews.splice(index, 1)
					break
				}
			}
		},
		DEL_OTHERS_VIEWS: (state, view) => {
			for(const [i, v] of state.visitedViews.entries()) {
				if(v.path === view.path) {
					state.visitedViews = state.visitedViews.slice(i, i + 1)
					break
				}
			}
			for(const i of state.cachedViews) {
				if(i === view.name) {
					const index = state.cachedViews.indexOf(i)
					state.cachedViews = state.cachedViews.slice(index, i + 1)
					break
				}
			}
		},
		DEL_ALL_VIEWS: (state) => {
			state.visitedViews = []
			state.cachedViews = []
		},
		UPDATE_VISITED_VIEW: (state, view) => {
			for(let v of state.visitedViews) {
				if(v.path === view.path) {
					v = Object.assign(v, view)
					break
				}
			}
		}
	},
	actions: {
		addView({
			dispatch
		}, view) {
			dispatch('addVisitedView', view)
		},
		addVisitedView({
			commit
		}, view) {
			commit('ADD_VISITED_VIEWS', view)
		},
		delView({
			dispatch,
			state
		}, view) {
			return new Promise(resolve => {
				dispatch('delVisitedView', view)
				resolve({
					visitedViews: [...state.visitedViews],
				})
			})
		},
		delVisitedView({
			commit,
			state
		}, view) {
			return new Promise(resolve => {
				commit('DEL_VISITED_VIEWS', view)
				resolve([...state.visitedViews])
			})
		},
		delOthersViews({
			dispatch,
			state
		}, view) {
			return new Promise(resolve => {
				dispatch('delOthersVisitedViews', view)
				resolve({
					visitedViews: [...state.visitedViews],
				})
			})
		},
		delOthersVisitedViews({
			commit,
			state
		}, view) {
			return new Promise(resolve => {
				commit('DEL_OTHERS_VIEWS', view)
				resolve([...state.visitedViews])
			})
		},
		delAllViews({
			dispatch,
			state
		}, view) {
			return new Promise(resolve => {
				dispatch('delAllVisitedViews', view)
				resolve({
					visitedViews: [...state.visitedViews],
				})
			})
		},
		delAllVisitedViews({
			commit,
			state
		}) {
			return new Promise(resolve => {
				commit('DEL_ALL_VIEWS')
				resolve([...state.visitedViews])
			})
		},
		updateVisitedView({
			commit
		}, view) {
			commit('UPDATE_VISITED_VIEW', view)
		}
	}
}

export default tagsView