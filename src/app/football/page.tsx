
'use client'
import useSWR from "swr"

type  League = {
    data: {
      id: number;
      sport_id: number;
      country_id: number;
      name: string;
      active: boolean;
      short_code: string;
      image_path: string;
      type: string;
      sub_type: string;
      last_played_at: string;
      has_jerseys: boolean;
  };
}
      
export default function Leagues() {
//http https://swapi.dev/api/people/1/
const fetcher = (url: string) => fetch(url).then((res) => res.json())
        const URL = ""
        const {data, error, isLoading}  = useSWR<League[]>(URL, fetcher)
        const dataArray = data ? [data] : [];
//UKHiPmifWUXcImQYp2K6sSWPwLMBgiW1fFJfOzhVTSHSthnGUg8BbP0fT0mf
                
        return (
            <ul> {data && (
                    <li>
                        Dados: {data.data}
                        <br />
                        
                       
                       
                    </li>
                )}
            </ul>

        )
}

//https://api.football-data.org/v4/teams/86/matches?status=SCHEDULED