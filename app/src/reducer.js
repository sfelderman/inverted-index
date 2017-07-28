const reducer = (state = {}, action={}) => {
	switch(action.type) {
		case 'SEARCH':
			console.log('inside reducer');
			return state;
		default:
			return state;
	}
}

export default reducer;