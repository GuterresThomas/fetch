'use client'
import useSWR from "swr"

type Character = {
    birth_year: string;
    height: string;
    name: string;
}
export default function Characters() {
//http https://swapi.dev/api/people/1/
const fetcher = (url: string) => fetch(url).then((res) => res.json())
        const URL = "https://swapi.dev/api/people/1/"
        const {data, error, isLoading}  = useSWR<Character[]>(URL, fetcher)
        const dataArray = data ? [data] : [];

        return (
            <ul>
                {data && (
                    <li>
                        Name: {data.name}
                        <br />
                        Birth Year: {data.birth_year}
                        <br />
                        Height: {data.height}
                        <br />
                       
                    </li>
                )}
            </ul>

        )
}
