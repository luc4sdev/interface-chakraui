import { ContinentPage } from "../../components/ContinentPage";
import { Header } from "../../components/Header";

import oceania from '../../services/oceania.json'


export default function Oceania() {
    return (
        <>
            <Header />
            <ContinentPage name={oceania.data.name} description={oceania.data.description} countrys={oceania.data.countrys} languages={oceania.data.languages} cities={oceania.data.cities} background={oceania.data.background} city1={oceania.data.city1} city2={oceania.data.city2} city3={oceania.data.city3} city4={oceania.data.city4} city5={oceania.data.city5} citiesData={oceania.data.citiesData}/>
        </>
    )
}