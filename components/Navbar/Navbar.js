import React from "react";
import {Flex, Stack, Text, Image} from '@chakra-ui/react'

function Navbar(){
    const navList = [
        'Menus', 'About Us', 'Reservations', 'Hours & Location', 'Merch'
    ]
    return (
        <Stack p={8}>
            <Flex justifyContent={'space-between'}>
                <Flex>
                    <Image maxW={'200px'} src={'New_Project.png'}/>
                </Flex>
                <Flex 
                    fontStyle={'italic'} 
                    fontWeight={'bolder'} 
                    gap={10}>
                    {navList.map((item) => {
                        return (
                            <Text cursor={'pointer'}>
                                {item}
                            </Text>
                        )
                    })}
                </Flex>
            </Flex>
        </Stack>
    )
}

export default Navbar