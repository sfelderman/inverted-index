const reducer = (state = {}, action={}) => {
	switch(action.type) {
		case 'ADD_FILE':
			console.log('inside addFile');
			return Object.assign({}, state, {
				uploadedFiles: Object.assign({}, state.uploadedFiles, {
					[action.name]: action.data
				})
			})
		case 'UPDATE_QUERY':
			console.log('inside query');
			return Object.assign({}, state, {
				query: action.query
			})
		case 'UPDATE_INDEX':
			console.log('inside update');
			return Object.assign({}, state, {
				dict: action.dict
			})
		default:
			return state;
	}
}

export default reducer;
