import React from 'react';

const FileBlock = ({name, data}) => {
  // data = data.replace('\n', '<br>');
  // let longest = 0;

  return (
    <div className='FileBlock'>
      <h4>{name}</h4>
      <div className='view-data'>{data}</div>
    </div>
  )
}

export default FileBlock;
