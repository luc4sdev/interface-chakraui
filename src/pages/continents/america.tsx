import { ContinentPage } from "../../components/ContinentPage";
import { Header } from "../../components/Header";

import america from '../../services/america.json'


export default function Aerica() {
    return (
        <>
            <Header />
            <ContinentPage name={america.data.name} description={america.data.description} countrys={america.data.countrys} languages={america.data.languages} cities={america.data.cities} background={america.data.background} city1={america.data.city1} city2={america.data.city2} city3={america.data.city3} city4={america.data.city4} city5={america.data.city5} citiesData={america.data.citiesData}/>
        </>
    )
}