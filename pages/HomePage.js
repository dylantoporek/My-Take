import React from 'react'
import {Stack, Flex, Text} from '@chakra-ui/react'
import Carousel from '../components/Carousel/Carousel'
function HomePage(){

    return (
        <Stack>
            <Flex justifyContent={'center'}>
                <Carousel />
            </Flex>
        </Stack>
    )
}

export default HomePage

