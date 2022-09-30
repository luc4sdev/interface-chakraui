import { useState } from 'react'
import { Box, HStack, Flex, Text, Divider, Center, useBreakpointValue, Icon, SimpleGrid } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import Image from 'next/image'
import Link from 'next/link'

import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import airplane from '../../public/assets/main/Airplane.svg'
import cocktail from '../../public/assets/main/cocktail.svg'
import surf from '../../public/assets/main/surf.svg'
import building from '../../public/assets/main/building.svg'
import museum from '../../public/assets/main/museum.svg'
import earth from '../../public/assets/main/earth.svg'



const TravelTypes = [
    {
        name: 'vida noturna',
        img: cocktail
    },
    {
        name: 'praia',
        img: surf
    },
    {
        name: 'moderno',
        img: building
    },
    {
        name: 'clássico',
        img: museum
    },
    {
        name: 'e mais...',
        img: earth
    },
]

export function Main() {

    const [types] = useState(TravelTypes)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return (
        <Box w='100%' h='100%'>
            <Box
                bgImage="url('/assets/main/background.png')"
                bgPosition="center"
                bgRepeat="repeat-y"
                bgSize="100%"
                w='100%'
                h={[163, null, 368]}
                p={4}
                color='white'
            >

                {isWideVersion && (
                    <HStack spacing='24px'>
                        <Flex align="center" justify="center" w='50%' h='100%' >
                            <Flex direction='column' align="left" justify="center" w='60%' h='100%' >
                                <Text fontSize="36px" wordBreak='keep-all' >5 continentes,</Text>
                                <Text fontSize="36px" wordBreak='keep-all' pb={4} >infinitas possibilidades.</Text>
                                <Text fontSize="20px" fontWeight="light" color="gray.200">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                            </Flex >
                        </Flex >

                        <Flex align="end" mt={2} justify="center" w='50%' h='100%'>
                            <Image src={airplane} alt="World Trip" />
                        </Flex>
                    </HStack>
                )}

                {!isWideVersion && (
                    <Flex align="center" justify="center" w='100%' h='100%' >
                        <Flex direction='column' align="left" justify="center" w='100%' h='100%' >
                            <Text fontSize={[24,null, 36]} wordBreak='keep-all' >5 continentes,</Text>
                            <Text fontSize={[24,null, 36]} wordBreak='keep-all' pb={4} >infinitas possibilidades.</Text>
                            <Text fontSize={[14,null, 20]} fontWeight="light" color="gray.200">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                        </Flex >
                    </Flex >
                )}



            </Box>

            {isWideVersion && (
                <Flex
                    align="center"
                    justify="space-around"
                    w='100%'
                    h='145px'
                    mt='80px'
                    px='140px'
                >

                    {types.map(type => (
                        <Flex key={type.name} flexDirection='column' align="center"
                            justify="space-between" gap='24px'>
                            <Image src={type.img} alt="World Trip" />
                            <Text fontSize='24px' fontWeight='bold' color="gray.400">{type.name}</Text>
                        </Flex>
                    ))}


                </Flex>
            )}

            {!isWideVersion && (
                <SimpleGrid
                columns={2} 
                spacing={10}
                    w='100%'
                    h={[120,null,145]}
                    my='36px'
                    px='50px'
                >

                    {types.map(type => (
                        <Flex key={type.name} align="center"
                            justify="center" gap={4}>
                            <Icon viewBox='0 0 200 200' color='yellow.500'>
                                <path
                                    fill='currentColor'
                                    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                />
                            </Icon>
                            <Text fontSize={[18,null,24]} fontWeight='bold' color="gray.400">{type.name}</Text>
                        </Flex>
                    ))}


                </SimpleGrid>
            )}




            <Center>
                <Divider w='90px' mt='80px' border='2px' borderColor='gray.400' />
            </Center>

            <Flex direction='column' align='center' justify='center' mt='80px'>
                <Text fontSize={[20,null,36]} fontWeight="medium">Vamos nessa?</Text>
                <Text fontSize={[20,null,36]} fontWeight="medium">Então escolha seu continente</Text>
            </Flex>



            <Box w='100%' h={[250,null,450]} mt='52px' px={[0,null,100]} mb='40px'>

                <Box w="100%" h='100%' cursor='pointer'>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <Link href="/continents/europe">
                                <Flex
                                    align="center"
                                    justify="center"
                                    bgImage="url('/assets/main/europe.jpg')"
                                    bgRepeat='no-repeat'
                                    bgSize="100%"
                                    w='100%'
                                    h='100%'    
                                    p={4}
                                    color='white'
                                >
                                    <Flex direction='column' align="center" justify="center" >
                                        <Text fontSize={[24,null,48]} fontWeight='bold' >Europa</Text>
                                        <Text fontSize={[14,null,24]} fontWeight="bold" pb={4} >O continente mais antigo.</Text>
                                    </Flex >
                                </Flex>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href="/continents/asia">
                                <Flex
                                    align="center"
                                    justify="center"
                                    bgImage="url('/assets/main/asia.jpg')"
                                    bgRepeat='no-repeat'
                                    bgSize="100%"
                                    w='100%'
                                    h='100%'
                                    p={4}
                                    color='white'
                                >
                                    <Flex direction='column' align="center" justify="center" >
                                        <Text fontSize={[24,null,48]} fontWeight='bold' >Ásia</Text>
                                        <Text fontSize={[14,null,24]} fontWeight="bold" pb={4} >Grande diversidade cultural.</Text>
                                    </Flex >
                                </Flex>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide>
                            <Link href="/continents/america">
                                <Flex
                                    align="center"
                                    justify="center"
                                    bgImage="url('/assets/main/america.jpg')"
                                    bgRepeat='no-repeat'
                                    bgSize="100%"
                                    w='100%'
                                    h='100%'
                                    p={4}
                                    color='white'
                                >
                                    <Flex direction='column' align="center" justify="center" >
                                        <Text fontSize={[24,null,48]} fontWeight='bold' >América</Text>
                                        <Text fontSize={[14,null,24]} fontWeight="bold" pb={4} >Repleta de belezas naturais.</Text>
                                    </Flex >
                                </Flex>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide>
                            <Link href="/continents/africa">
                                <Flex
                                    align="center"
                                    justify="center"
                                    bgImage="url('/assets/main/africa.jpg')"
                                    bgRepeat='no-repeat'
                                    bgSize="100%"
                                    w='100%'
                                    h='100%'
                                    p={4}
                                    color='white'
                                >
                                    <Flex direction='column' align="center" justify="center" >
                                        <Text fontSize={[24,null,48]} fontWeight='bold' >África</Text>
                                        <Text fontSize={[14,null,24]} fontWeight="bold" pb={4} >Passeios incríveis.</Text>
                                    </Flex >
                                </Flex>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide>
                            <Link href="/continents/oceania">
                                <Flex
                                    align="center"
                                    justify="center"
                                    bgImage="url('/assets/main/oceania.jpg')"
                                    bgRepeat='no-repeat'    
                                    bgSize="100%"
                                    w='100%'
                                    h='100%'
                                    p={4}
                                    color='white'
                                >
                                    <Flex direction='column' align="center" justify="center" >
                                        <Text fontSize={[24,null,48]} fontWeight='bold' >Oceania</Text>
                                        <Text fontSize={[14,null,24]} fontWeight="bold" pb={4} >Pequena, porém exótica.</Text>
                                    </Flex >
                                </Flex>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>

        </Box>
    )
}   