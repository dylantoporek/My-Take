import React from "react";
import {Flex, Stack, Text, Image, useMediaQuery} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'

function Navbar(){
    const navList = [
        'Menus', 'About Us', 'Reservations', 'Hours & Location', 'Merch'
    ]

    const [isMobile] = useMediaQuery('(max-width: 768px)')
    return (
        <Stack p={8}>
            <Flex justifyContent={'space-between'}>
                <Flex>
                    <Image maxH={'100px'} maxW={'100px'} src={'New_Project.png'}/>
                </Flex>
                {isMobile ? 
                ( 
                <Flex mt={3}>
                    <HamburgerIcon/>
                </Flex>
                )
                :
                (
                <Flex 
                    mt={3}
                    fontStyle={'italic'} 
                    fontWeight={'bolder'} 
                    gap={10}>
                    {navList.map((item) => {
                        return (
                            <Text key={item} cursor={'pointer'}>
                                {item}
                            </Text>
                        )
                    })}
                </Flex>
                )}
            </Flex>
        </Stack>
    )
}

export default Navbar