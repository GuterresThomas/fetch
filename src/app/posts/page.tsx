type Post = {
    userId: number,
    id: number,
    title: string 
    body: string
}


    async function getData(): Promise<Post[]> {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')

        if(!res.ok){
            throw new Error('Erro ao carregar posts');   
        }

        const data = await res.json()
        return data
    }
    export default async function Posts () {
        const posts = await getData() 
        return (
            <ul>
               {posts.map((post) => (
                    <li key={post.userId}>
                    {post.id}
                    {post.title}
                    {post.body}
                    </li>
               ))} 
            </ul>
        )
    }