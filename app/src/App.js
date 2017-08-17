import React, { Component } from 'react';
import DragSubmit from './DragSubmit';
import SearchBar from './search/SearchBar';
import DisplaySearch from './display/DisplaySearch';
import styles from './App.css';

class App extends Component {
  render() {
    return (
    	<div style={styles}>
    		<DragSubmit />
     	 	<SearchBar />
     	 	<DisplaySearch />
    	</div>
    );
  }
}

export default App;
