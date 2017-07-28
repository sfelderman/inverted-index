import React from 'react';
import {connect} from 'react-redux';
import {search} from './actions';

let SearchBar = ({onSubmit}) => {
	const checkSubmit = (e) => {
		if (e.key === 'Enter' || e.target.keyCode === 13) {
			debugger;
			e.preventDefault();
			onSubmit()
		}
		// return true;
	}



	return (
		<form >
			<input onChange={checkSubmit} className="querySearch" type="text" placeholder="Search Here" autoFocus onKeyPress={checkSubmit}></input>
		</form>
	)	
}

// const mapStateToProps = (state, ownProps) => {

// }

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (query) => {
			debugger;
			console.log('submit dispatch')
			dispatch(search(query))
		}
	}
}

SearchBar = connect(null, mapDispatchToProps)(SearchBar);

export default SearchBar;