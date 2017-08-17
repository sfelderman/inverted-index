import React from 'react';
import {connect} from 'react-redux';
import {updateQuery} from '../actions';
import {clean} from '../util/createDict';
import SearchOptions from './SearchOptions';

let SearchBar = ({onSubmit}) => {
	const checkSubmit = (e) => {
		if (e.key === 'Enter' || e.target.keyCode === 13) {
			e.preventDefault();
			onSubmit(clean(e.target.value.trim()));
			e.target.value = '';
		}
	}

	return (
		<div className='in-line'>
			<form >
				<input onChange={checkSubmit} className="querySearch" type="text" placeholder="Search Here" autoFocus onKeyPress={checkSubmit}></input>
			</form>
			<SearchOptions />
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (query) => {
			dispatch(updateQuery(query))
		}
	}
}

SearchBar = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBar;
