import { ContinentPage } from "../../components/ContinentPage";
import { Header } from "../../components/Header";

import asia from '../../services/asia.json'


export default function Asia() {
    return (
        <>
            <Header />
            <ContinentPage name={asia.data.name} description={asia.data.description} countrys={asia.data.countrys} languages={asia.data.languages} cities={asia.data.cities} background={asia.data.background} city1={asia.data.city1} city2={asia.data.city2} city3={asia.data.city3} city4={asia.data.city4} city5={asia.data.city5} citiesData={asia.data.citiesData}/>
        </>
    )
}