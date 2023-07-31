'use client'

import { useState, useEffect } from "react";

type Post = {
    userId: number,
    id: number,
    title: string 
    body: string
}


export default function Posts () {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')

            if(!res.ok){
                throw new Error("Erro ao carregar posts");
            }

            const data: Post[] =  await res.json()
            setPosts(data)
        }
        getData()
    }, []) 

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.userId}>
                    {post.id}
                    {post.title}
                    {post.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}