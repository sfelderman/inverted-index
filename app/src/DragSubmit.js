import React from 'react';
import './DragSubmit.css'
import {createDict} from './util/createDict.js';

// var fs = require('fs');
var dict = {};

const DragSubmit = () => {
	return (
		<div className='drop_zone' onDrop={drop_handler} onDragOver={dragover_handler} >
  			<strong>Drag one or more files to this Drop Zone ...</strong>
		</div>
	);

	function drop_handler(ev) {
	  // console.log("Drop");
	  ev.preventDefault();
	  // If dropped items aren't files, reject them
	  let dt = ev.dataTransfer;
	  if (dt.items) {
	    // Use DataTransferItemList interface to access the file(s)
	    for (let i=0; i < dt.items.length; i++) {
	      if (dt.items[i].kind === "file") { //TODO also check that it is a readable file and not an image
	      	let data = dt.getData(dt.items[i]);
	        let f = dt.items[i].getAsFile();
	        var reader = new FileReader();
	        reader.onload = function(e) {
	        	var data = e.target.result;
				dict = createDict(data, dict);
				console.log(dict);

	        }
    		reader.readAsText(f);

	        // console.log("... file[" + i + "].name = " + f.name);
	      }
	    }
	  } else {
	    // Use DataTransfer interface to access the file(s)
	    for (let i=0; i < dt.files.length; i++) {
	      console.log("... file[" + i + "].name = " + dt.files[i].name);
	    }  
	  }
	}

	function dragover_handler(ev) {
	  // console.log("dragOver");
	  // Prevent default select and drag behavior
	  ev.preventDefault();
	}

	// function dragend_handler(ev) {
	//   // console.log("dragEnd");
	//   // // Remove all of the drag data
	//   // let dt = ev.dataTransfer;
	//   // if (dt.items) {
	//   //   // Use DataTransferItemList interface to remove the drag data
	//   //   for (let i = 0; i < dt.items.length; i++) {
	//   //     dt.items.remove(i);
	//   //   }
	//   // } else {
	//   //   // Use DataTransfer interface to remove the drag data
	//   //   ev.dataTransfer.clearData();
	//   // }
	// }
}

export default DragSubmit;