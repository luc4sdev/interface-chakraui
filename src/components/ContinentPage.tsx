import { useState } from 'react'
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Cities from "./Cities";

interface Data {
    city: string;
    country: string;
    background: string;
    flag: string;
}
interface ContinentPageProps {
    name: string;
    description: string;
    countrys: number;
    languages: number;
    cities: number;
    background: string;
    city1: string;
    city2: string;
    city3: string;
    city4: string;
    city5: string;
    citiesData: Data[];
}

export function ContinentPage({ name, description, countrys, languages, cities, background, city1, city2, city3, city4, city5, citiesData }: ContinentPageProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return (
        <Box w="100%" h="100%">
            <Flex
                w="100%"
                h={[150, null, 500]}
                bgImage={background}
                bgPosition="center"
                bgRepeat='no-repeat'
                bgSize="100%"
                pb={['0px', '0px', "59px"]}
                pl={['0px', '0px', "140px"]}
                color='white'
                align={['center', 'center', 'end']}
                justify={['center', 'center', 'start']}
            >
                <Text fontSize={[28, null, 48]} fontWeight="medium">{name}</Text>
            </Flex>

            {isWideVersion && (
                <HStack w='100%' h="350px" spacing='24px'>
                    <Box w='50%' h='211px' pl="140px">
                        <Text text-align="center" w={['100%', null, '600px']} fontSize="24px" fontWeight="normal" color="gray.400">{description}</Text>
                    </Box>

                    <HStack w='50%' h='99px'>
                        <VStack w="33%" spacing={0}>
                            <Text fontSize="48px" fontWeight="bold" color="yellow.500">{countrys}</Text>
                            <Text fontSize="24px" fontWeight="bold" color="gray.400">países</Text>
                        </VStack>

                        <VStack w="33%" spacing={0}>
                            <Text fontSize="48px" fontWeight="bold" color="yellow.500">{languages}</Text>
                            <Text fontSize="24px" fontWeight="bold" color="gray.400">línguas</Text>
                        </VStack>

                        <VStack w="33%" spacing={0}>
                            <Text fontSize="48px" fontWeight="bold" color="yellow.500">{cities}</Text>
                            <HStack>
                                <Text fontSize="24px" fontWeight="bold" color="gray.400">cidades +100 </Text>
                                <Popover placement='bottom-start'>
                                    <PopoverTrigger>
                                        <Button bg="none"><InfoOutlineIcon w={5} h={5} color="gray.300" /></Button>
                                    </PopoverTrigger>
                                    <PopoverContent m='0'>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Cidades</PopoverHeader>
                                        <PopoverBody>{city1}</PopoverBody>
                                        <PopoverBody>{city2}</PopoverBody>
                                        <PopoverBody>{city3}</PopoverBody>
                                        <PopoverBody>{city4}</PopoverBody>
                                        <PopoverBody>{city5}</PopoverBody>
                                        <PopoverBody>Entre outras...</PopoverBody>


                                    </PopoverContent>
                                </Popover>
                            </HStack>
                        </VStack>
                    </HStack>
                </HStack>
            )}


            {!isWideVersion && (
                <VStack w='100%'  spacing='16px' py='24px'>
                    <Box w='100%' h='100%' pl="16px">
                        <Text text-align="center" w='100%' fontSize="24px" fontWeight="normal" color="gray.400">{description}</Text>
                    </Box>

                    <HStack w='100%' h='59px'>
                        <VStack w="100%" spacing={0}>
                            <Text fontSize="24px" fontWeight="bold" color="yellow.500">{countrys}</Text>
                            <Text fontSize="16px" fontWeight="bold" color="gray.400">países</Text>
                        </VStack>

                        <VStack w="100%" spacing={0}>
                            <Text fontSize="24px" fontWeight="bold" color="yellow.500">{languages}</Text>
                            <Text fontSize="16px" fontWeight="bold" color="gray.400">línguas</Text>
                        </VStack>

                        <VStack w="100%" spacing={0}>
                            <Text fontSize="24px" fontWeight="bold" color="yellow.500">{cities}</Text>
                            <HStack >
                                <Text fontSize="16px" fontWeight="bold" color="gray.400">cidades </Text>
                                <Popover placement='bottom-start'>
                                    <PopoverTrigger>
                                        <Button bg="none"><InfoOutlineIcon w={3} h={3} color="gray.300" /></Button>
                                    </PopoverTrigger>
                                    <PopoverContent m='0'>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Cidades</PopoverHeader>
                                        <PopoverBody>{city1}</PopoverBody>
                                        <PopoverBody>{city2}</PopoverBody>
                                        <PopoverBody>{city3}</PopoverBody>
                                        <PopoverBody>{city4}</PopoverBody>
                                        <PopoverBody>{city5}</PopoverBody>
                                        <PopoverBody>Entre outras...</PopoverBody>


                                    </PopoverContent>
                                </Popover>
                            </HStack>
                        </VStack>
                    </HStack>
                </VStack>
            )}





            <Cities citiesData={citiesData}/>
        </Box>
    )
}