import React from 'react';
import {connect} from 'react-redux';
import {updateIndex, addFile} from './actions';
import {createDict} from './util/createDict.js';

let DragSubmit = ({dict, sendData, uploadFile}) => {
	const drop_handler = (ev) => {
	  ev.preventDefault();
	  // If dropped items aren't files, reject them
	  let dt = ev.dataTransfer;
	  if (dt.items) {
	    // Use DataTransferItemList interface to access the file(s)
	    for (let i=0; i < dt.items.length; i++) {
	      if (dt.items[i].kind === "file") { //TODO also check that it is a readable file and not an image
	      	// let data = dt.getData(dt.items[i]);
	        let f = dt.items[i].getAsFile();
					const name = f.name;
	        var reader = new FileReader();

				reader.onload = function(e) {
		        	let data = e.target.result;
					sendData(data, dict, name);
					uploadFile(name, data);
	        }

    			reader.readAsText(f);
	      }
	    }
	  } else {
	    // Use DataTransfer interface to access the file(s)
	    for (let i=0; i < dt.files.length; i++) {
	      console.log("... file[" + i + "].name = " + dt.files[i].name);
	    }
	  }
	}

	const dragover_handler = (ev) => {
	  // Prevent default select and drag behavior
	  ev.preventDefault();
	}

	return (
		<div className='drop_zone' onDrop={drop_handler} onDragOver={dragover_handler} >
  			<strong>Drag one or more files to this Drop Zone ...</strong>
		</div>
	);

}

const mapStateToProps = (state) => {
	return {
		dict: state.dict
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendData: (data, dict, name) => dispatch(updateIndex(createDict(data, dict, name))),
		uploadFile: (name, data) => dispatch(addFile(name,data))
	}
}

DragSubmit = connect(
	mapStateToProps,
	mapDispatchToProps
)(DragSubmit);

export default DragSubmit;
