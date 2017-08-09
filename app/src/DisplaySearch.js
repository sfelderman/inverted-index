import React from 'react';
import {connect} from 'react-redux';
import FileBlock from './FileBlock';
import Mark from 'front-markjs';


let DisplaySearch = ({dict, files, query}) => {
  let result = dict[query];

  if (!result) {
    result = '';
  } else {
    console.log('in result')
    result = Object.keys(result).map((name, index) => {
      return <FileBlock key={index} name={name} data={files[name]} query={query} locations={result} />
    })
  }


  return (
    <div>
      <div>
        Query: {query}
      </div>
      <div>
        {result}
      </div>

    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    dict: state.dict,
    files: state.uploadedFiles,
    query: state.query
  }
};

DisplaySearch = connect(
  mapStateToProps,
  null
)(DisplaySearch);

export default DisplaySearch;
