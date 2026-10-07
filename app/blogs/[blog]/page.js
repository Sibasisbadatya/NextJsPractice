import { notFound } from 'next/navigation';
import React from 'react'

export const dynamicParams = false; // by default it is true, so if we want to make it false then we can do that.
//  If we make it false then only the params which are generated in generateStaticParams will be available and if 
//  we try to access any other params then it will show 404 page.

export const generateMetadata = async({ params }) => {
  const {blog} = await params;
  console.log("BLOG ID metaData", blog);
  return {
    title: `Blog Page for ${blog}`,
    description: `This is the blog page for ${blog}`,
  }
}

// below is to make static site generation but if the datas which we are using and showing in UI here is changing frequently then we can leave it.
export const generateStaticParams = () => {
  const data = [1,2,3,4,5];
  // this array of ids we can use some dynamic api also
  return data.map((blog) => ({  
    blog: blog.toString()
  }))
}

const Blog = async({ params }) => {
    const {blog} = await params;
    const data = await params;
    console.log("BLOG ID", blog,data);
    if(blog==1){
      console.log("Sibasis")
      notFound()
    }
    return (
        <div>Blog:{blog}</div>
    )
}

export default Blog