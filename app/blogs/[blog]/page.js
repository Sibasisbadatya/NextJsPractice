import React from 'react'
export const generateMetadata = async({ params }) => {
  const {blog} = await params;
  console.log("BLOG ID metaData", blog);
  return {
    title: `Blog Page for ${blog}`,
    description: `This is the blog page for ${blog}`,
  }
}
const Blog = async({ params }) => {
    const {blog} = await params;
    const data = await params;
    console.log("BLOG ID", blog,data);
    return (
        <div>Blog:{blog}</div>
    )
}

export default Blog