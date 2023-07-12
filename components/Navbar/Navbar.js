import React from "react";
import {Flex, Stack, Text, Image} from '@chakra-ui/react'
import logo from '../../.next/static/media/logo.3081433c.png'

function Navbar(){
    return (
        <Stack w={'100%'} alignItems={'center'} justifyContent={'space-between'} flexDir={'row'}>
            <Flex backgroundColor={'red'}>
                <Image maxW={'200px'} maxH={'200px'} src={'/logo.png'}/>
            </Flex>
            <Flex mr={10} gap={5} h={'100%'} alignItems={'center'} fontWeight={'bold'}
            > 
                <Text cursor={'pointer'}>Menus</Text>
                <Text cursor={'pointer'}>About</Text>
            </Flex>
        </Stack>
    )
}

export default Navbar