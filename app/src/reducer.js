const reducer = (state = {}, action={}) => {
	switch(action.type) {
		case 'ADD_FILE':
			return Object.assign({}, state, {
				uploadedFiles: Object.assign({}, state.uploadedFiles, {
					[action.name]: action.data
				})
			})
		case 'UPDATE_QUERY':
			return Object.assign({}, state, {
				query: action.query
			})
		case 'UPDATE_INDEX':
			return Object.assign({}, state, {
				dict: action.dict
			})
		default:
			return state;
	}
}

export default reducer;
