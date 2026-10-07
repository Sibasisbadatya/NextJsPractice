"use client";

import { useEffect, useState } from "react";

export default function About() {
    console.log("About Page");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log("About Response", response);
                return response.json();})
            .then(json => setData(json))
    }, [])
    return (
        <>
            About Page
            {
                data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}