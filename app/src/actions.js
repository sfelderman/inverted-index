export const updateQuery = (query) => ({
	type: 'UPDATE_QUERY',
	query
});

export const updateIndex = (dict) => ({
	type: 'UPDATE_INDEX',
	dict
});

export const addFile = (name, data) => ({
	type: 'ADD_FILE',
	name,
	data
})
