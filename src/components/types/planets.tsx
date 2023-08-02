import useSWR from "swr"

type Planet = {
    climate: string;
    diameter: string;
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
}

const Planets = () => {
        const fetcher = (url: string) => fetch(url).then((res) => res.json())
        const URL = "http swapi.dev/api/planets/1/"
        const {data, error, isLoading}  = useSWR<Planet[]>(URL, fetcher)
        
}


export default Planet