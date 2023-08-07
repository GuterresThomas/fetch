type Post = {
    id: number,
}


async function getData(): Promise<Bet[]> {
    const res = await fetch("https://v3.football.api-sports.io/transfers?player=35845", {
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "1175bafbc2mshcbde2b5b68642f3p11ba34jsndd65f63e31f2"
            }
        })

    if(!res.ok){
        throw new Error('Erro ao carregar bets');   
    }

    const data = await res.json()
}
export default async function Bets () {
    const posts = await getData() 
    return (
        <div></div>
    )
}
