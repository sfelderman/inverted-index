import React, { Component } from 'react';
import DragSubmit from './DragSubmit';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
    	<div>
    		<DragSubmit />
     	 	<SearchBar />
    	</div>
    );
  }
}

export default App;
