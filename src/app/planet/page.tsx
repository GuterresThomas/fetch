'use client'
import useSWR from "swr"

type Character = {
    birth_year: string;
    height: string;
    name: string;
    films: string[]; // Lista de URLs dos filmes
    gender: string;
    hair_color: string;
    homeworld: string; // URL do planeta de origem
    mass: string;
    skin_color: string;
    created: string;
    edited: string;
    species: string[];
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
                        Films: {data.films.join(", ")}
                        <br />
                        Gender: {data.gender}
                        <br />
                        Hair Color: {data.hair_color}
                        <br />
                        Homeworld: {data.homeworld}
                        <br />
                        Mass: {data.mass}
                        <br />
                        Skin Color: {data.skin_color}
                        <br />
                        Created: {data.created}
                        <br />
                        Edited: {data.edited}
                        <br />
                        Species: {data.species.join(", ")}
                    </li>
                )}
            </ul>

        )
}
