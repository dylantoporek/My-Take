import React from "react";
import {Flex, Stack, Text, Image} from '@chakra-ui/react'
import logo from '../../public/New_Project.png'

function Navbar(){
    return (
        <Stack>
            <Flex>
                <Image src={logo}/>
            </Flex>
        </Stack>
    )
}

export default Navbar