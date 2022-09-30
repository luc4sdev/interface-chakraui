import logo from '../../public/assets/main/logo.svg'
import { Box, Center, Flex, SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link';
import { ChevronLeftIcon } from '@chakra-ui/icons';


interface HeaderProps {
    isHomePage?: boolean;
}

export function Header({ isHomePage }: HeaderProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    return (

        <Box w='100%' as='header'>
            {isHomePage ? (
                <Center bg='white' w='100%' h='100px'>
                    <Image src={logo} alt="World Trip" />
                </Center >
            ) : isWideVersion ? (
                <SimpleGrid columns={2} spacing={0} bg='white' w='90%' h='100px' as='header'>
                    <Flex  w='30%' alignItems='center'>
                        <Link href="/">
                            <ChevronLeftIcon w='100%' h='50px' cursor='pointer'/>
                        </Link>
                    </Flex >
                    
                    <Flex alignItems='center'>
                        <Image src={logo} alt="World Trip" />
                    </Flex >  
                </SimpleGrid >
            ) : !isWideVersion && (
                <SimpleGrid columns={2} spacing={0} bg='white' w='80%' h='100px' as='header'>
                    <Flex  w='30%' alignItems='center'>
                        <Link href="/">
                            <ChevronLeftIcon w='100%' h='50px' cursor='pointer'/>
                        </Link>
                    </Flex >
                    
                    <Flex alignItems='center'>
                        <Image src={logo} alt="World Trip" />
                    </Flex >  
                </SimpleGrid >
            )} 

        </Box>
    )
}