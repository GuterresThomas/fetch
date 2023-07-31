type Comments = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    if(!res.ok){
        throw new Error("Erro ao carregar")
    }

    const data = await res.json()
    return data    
}

export default async function Comments() {
    const comments = await getData()
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