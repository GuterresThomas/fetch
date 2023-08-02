'use client'
import useSWR from "swr"


type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export default function Todos () {
        const fetcher = (url: string) => fetch(url).then((res) => res.json())
        const URL = "https://jsonplaceholder.typicode.com/todos"
        const {data, error, isLoading}  = useSWR<Todo[]>(URL, fetcher)
        if(isLoading => {
            return (
                <h1>Loading</h1>
            )
        })
    return (

    <div>
        <ul className="bg-zinc-200">
            {data?.map((todo) => (
                <li key={todo.id}>
                    {todo.title}</li>
            ))}
        </ul>
    </div>
    )
    
}