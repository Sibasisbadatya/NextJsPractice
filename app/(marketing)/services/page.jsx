"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Services() {
    console.log("Services Page");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log("Service Response", response);
                return response.json();})
            .then(json => setData(json))
    }, [])
    return (
        <>
            Services Page
            <Link href="/about">About Page</Link>
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