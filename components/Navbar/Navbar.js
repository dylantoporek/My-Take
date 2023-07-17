import React from "react";
import {Flex, Stack, Text, Image} from '@chakra-ui/react'
import logo from '../../public/New_Project.png'

function Navbar(){
    return (
        <Stack p={8}>
            <Flex justifyContent={'space-between'}>
                <Flex>
                    <Image src={logo}/>
                </Flex>
                <Flex gap={2}>
                    <Text>Menus</Text>
                    <Text>About Us</Text>
                    <Text>Reservations</Text>
                    <Text>Hours & Location</Text>
                    <Text>Merch</Text>
                </Flex>
            </Flex>
        </Stack>
    )
}

export default Navbar