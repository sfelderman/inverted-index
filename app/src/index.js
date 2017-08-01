import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';

// const initialState = {
//   uploadedFiles: {},
//   query:'',
//   dict: {}
// };

const initialState = {
  uploadedFiles: {
    'text.txt': 'This is a file\nIt has text in it\nThere "is" a line of character\'s that has extra stuff!? ,. ""\nTesting This'
  },
  query: 'is',
  dict: {
    'this': {
      'text.txt': [
        0,
        3
      ]
    },
    is: {
      'text.txt': [
        0,
        2
      ]
    },
    a: {
      'text.txt': [
        0,
        2
      ]
    },
    file: {
      'text.txt': [
        0
      ]
    },
    it: {
      'text.txt': [
        1,
        1
      ]
    },
    has: {
      'text.txt': [
        1
      ]
    },
    text: {
      'text.txt': [
        1
      ]
    },
    'in': {
      'text.txt': [
        1
      ]
    },
    there: {
      'text.txt': [
        2
      ]
    },
    line: {
      'text.txt': [
        2
      ]
    },
    of: {
      'text.txt': [
        2
      ]
    },
    characters: {
      'text.txt': [
        2
      ]
    },
    that: {
      'text.txt': [
        2
      ]
    },
    suck: {
      'text.txt': [
        2
      ]
    },
    testing: {
      'text.txt': [
        3
      ]
    }
  }
}

const store = createStore(
   reducer, initialState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>,
  	document.getElementById('root'));

registerServiceWorker();
