import React from 'react'

const Comment = async({ params }) => {
    const {blog, commentID} = await params;
  return (
    <div>Comment: {commentID} for Blog: {blog}</div>
  )
}

export default Comment