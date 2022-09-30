import { Avatar, Box, Flex, Grid, GridItem, HStack, Text, useBreakpointValue, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";

import londres from '../../public/assets/europe/londres.jpg'
import logoLondres from '../../public/assets/europe/logoLondres.svg'
import { useState } from "react";


interface Data {
    city: string;
    country: string;
    background: string;
    flag: string;
}

interface CitiesProps {
    citiesData: Data[];
}

export default function Cities({ citiesData }: CitiesProps) {

    const [datacity] = useState<Data[]>(citiesData)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return (

        <Box w='100%' h='auto' px={[16, null, 140]} py={['32px', null, '80px']}>
            <Text fontSize={[24, null, 36]} fontWeight='medium' color='gray.400' pb='40px'>Cidades +100</Text>

            {isWideVersion && (

                <Grid templateColumns='repeat(4, 1fr)' gap={20}>

                    {datacity.map((data) => (
                        <GridItem key={data.city} w='100%' h='100%'>

                            <Image src={data.background} width={256} height={173} alt={data.city} layout="responsive" />
                            <Flex alignItems='center' justifyContent='center' w='100%' h='143px' border='2px' borderColor='yellow.500' borderTop='0' borderBottomRadius="5">
                                <VStack w='50%' spacing='15px'>
                                    <Text fontSize='20px' fontWeight='medium' color='gray.400'>{data.city}</Text>
                                    <Text fontSize='16px' fontWeight='medium' color='gray.300'>{data.country}</Text>
                                </VStack>
                                <Flex alignItems='center' justifyContent='center' w='50%' h='100%'>
                                    <Wrap>
                                        <WrapItem>
                                            <Avatar name={data.country} src={data.flag} />
                                        </WrapItem>
                                    </Wrap>
                                </Flex>
                            </Flex>

                        </GridItem>

                    ))}

                </Grid>
            )}


            {!isWideVersion && (
                <Grid templateColumns='repeat(1, 1fr)' gap={12}>

                    {datacity.map((data) => (
                        <GridItem key={data.city} w='100%' h='100%'>

                            <Image src={data.background} width={256} height={173} alt={data.city} layout="responsive" />
                            <Flex alignItems='center' justifyContent='center' w='100%' h='143px' border='2px' borderColor='yellow.500' borderTop='0' borderBottomRadius="5">
                                <VStack w='50%' spacing='15px'>
                                    <Text fontSize='16px'   fontWeight='medium' color='gray.400'>{data.city}</Text>
                                    <Text fontSize='14px' wordBreak='break-word' fontWeight='medium' color='gray.300'>{data.country}</Text>
                                </VStack>
                                <Flex alignItems='center' justifyContent='center' w='50%' h='100%'>
                                    <Wrap>
                                        <WrapItem>
                                            <Avatar name={data.country} src={data.flag} />
                                        </WrapItem>
                                    </Wrap>
                                </Flex>
                            </Flex>

                        </GridItem>

                    ))}


                </Grid>
            )}
        </Box>
    )
}