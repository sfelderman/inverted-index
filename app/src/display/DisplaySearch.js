import React from 'react';
import {connect} from 'react-redux';
import {clean} from '../util/createDict';
import FileBlock from './FileBlock';

let DisplaySearch = ({dict, files, query}) => {
  let result = dict[query.toLowerCase()];
  if (!result) {
    result = dict[clean(query)];
  }
  if (!result) {
    result = '';
  } else {
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
