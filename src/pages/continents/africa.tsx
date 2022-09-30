import { ContinentPage } from "../../components/ContinentPage";
import { Header } from "../../components/Header";

import africa from '../../services/africa.json'


export default function Africa() {
    return (
        <>
            <Header />
            <ContinentPage name={africa.data.name} description={africa.data.description} countrys={africa.data.countrys} languages={africa.data.languages} cities={africa.data.cities} background={africa.data.background} city1={africa.data.city1} city2={africa.data.city2} city3={africa.data.city3} city4={africa.data.city4} city5={africa.data.city5} citiesData={africa.data.citiesData}/>
        </>
    )
}