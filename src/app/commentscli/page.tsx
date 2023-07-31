'use client'
import { useState, useEffect } from "react";

type Comments = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export default function Comments () {
    const [comments, setComments] = useState<Comments[]>([])

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments')
            if(!res.ok){
                throw new Error("Erro ao carregar");
                
            }
            const data: Comments[] = await res.json()
            setComments(data)
        }
        getData()
    }, [])
    return (
        <ul>
            {comments.map((comment) => (
                <li key={comment.postId}>
                    {comment.id}
                    {comment.name}
                    {comment.email}
                    {comment.body}
                </li>
            ))}
        </ul>
    )
}