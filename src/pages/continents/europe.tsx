import { Box } from '@chakra-ui/react';
import { useState } from 'react'
import { ContinentPage } from "../../components/ContinentPage";
import { Header } from "../../components/Header";

import europe from '../../services/europe.json'

export default function Europe() {

    const isHomePage = false

    return (
        <Box w='100vw' h='100%'>
            <Header isHomePage={isHomePage}/>
            <ContinentPage name={europe.data.name} description={europe.data.description} countrys={europe.data.countrys} languages={europe.data.languages} cities={europe.data.cities} background={europe.data.background} city1={europe.data.city1} city2={europe.data.city2} city3={europe.data.city3} city4={europe.data.city4} city5={europe.data.city5} citiesData={europe.data.citiesData}/>
        </Box>
    )
}