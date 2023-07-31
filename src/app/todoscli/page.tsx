'use client'
import {useEffect, useState} from "react"


type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export default function Todos () {
    
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')

        if(!res.ok){
            throw new Error('Falha ao carregar Todos');
        }

        const data: Todo[] = await res.json()
        setTodos(data);
    }
    getData();
    

    }, []);
    return (
    <div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
    )
}