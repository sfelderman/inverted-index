import React from 'react';
import {clean} from '../util/createDict';
import Highlight from './Highlight';

const FileBlock = ({name, data, query, locations}) => {
  const findIndex = (line, query) => {
  	const split = line.split(' ');
  	let loc = 0;
  	split.forEach((word, index) => {
  		const cleaned = clean(word);
  		if (cleaned === query.toLowerCase()) {
  			if (index > 0) {
  				split.slice(0, index).forEach((word) => {
  					loc += word.length + 1;
  				});
  			}
  			if (cleaned.length !== word.length) {
  				loc += word.toLowerCase().indexOf(cleaned);
  			}
  		}
  	})
    if (loc === 0) {
      return loc;
    }
		return loc || line.indexOf(query) || line.toLowerCase().indexOf(query);
  }

  const findIndexes = () => {
  	const lines = data.split('\n');
  	let found = {};
	  locations[name].forEach((loc) =>  {
  		found[loc] = findIndex(lines[loc], query);
	  })
	  return found;
  }

  const arr = findIndexes();
  let lines = data.split('\n');
  lines = Object.keys(lines).map((key) => {
  	if (key in arr) {
	  	const line = lines[key];
	  	const index = arr[key];
	  	return (
	  		<div key={key} className='no-break'>
		  		<span>{line.substring(0, index)}</span>
		  		<Highlight word={line.substring(index, index+query.length)} />
		  		<span>{line.substring(index + query.length)}</span>
	  		</div>
			);
	  } else {
	  	return <div>{lines[key]}</div>;
	  }
  })

  return (
    <div className='FileBlock'>
      <h4>{name}</h4>
      <div className='modified-data'>{lines}</div>
    </div>
  )
}

export default FileBlock;
