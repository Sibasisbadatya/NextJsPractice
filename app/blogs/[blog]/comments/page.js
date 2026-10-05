import React from 'react'

const Comments = async({ params }) => {
    const {blog} = await params;
    const data = await params;
    return (
        <div>Comments for Blog:{blog}</div>
    )
}

export default Comments