'use client'
import useSWR from "swr"

type Product = {
    title: string;
    price: number;
    id: number;
}



 export default function Products() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json())
    const URL = "https://fakestoreapi.com/products"
    const { data, error, isLoading  }  = useSWR<Product[]>(URL, fetcher)
    return (
        <ul>
            {data?.map((product) => (
                <li key={product.id}>
                    {product.title}
                </li>
            ))}
        </ul>
        )
}