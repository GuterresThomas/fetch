'use client'
import useSWR from "swr"
//import Button from "@/components/button";


type Product = {
    title: string;
    price: number;
    id: number;
    category: string
}



 export default function Products() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json())
    const URL = "https://fakestoreapi.com/products"
    const { data, error, isLoading  }  = useSWR<Product[]>(URL, fetcher)
    return (
    <div>
        <div className="flex justify-center font-semibold "><h1>Produtos</h1></div>
        <div className="h-screen  flex justify-center ">    
            
            <ul className="m-2">
                {data?.map((product) => (
                    <li key={product.id}>
                        <div className="mb-2">{product.title} {product.price} - {product.category}</div>      
                    </li>
                ))}
            </ul>
        </div>
    </div>
        )
}