import React from 'react'


const FileComponent = async ({params}) => {
  const {filePath} =await params;
//  // But we can have optional route also
  return (
    <div>File: {filePath.join('/') }</div>
  )
}

export default FileComponent