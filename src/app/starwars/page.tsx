'use client'
import useSWR from "swr"

type Person = {
    name: string,
	height: number,
	mass: number
}

 export default function Persons() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json())
    const URL = "https://swapi.dev/api/people/1/"
    const { data, error, isLoading  }  = useSWR<Person[]>(URL, fetcher)
    return (
        console.log(data)
        )
}