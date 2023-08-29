import React from 'react'
import {Stack, Flex, Text, Image} from '@chakra-ui/react'
import {ChevronRightIcon, ChevronLeftIcon} from '@chakra-ui/icons'
function Carousel(){
    const images = ['food1.jpg', 'food2.jpeg', 'food3.avif']

    return (
        <Flex maxW={'80%'}>
         <ChevronLeftIcon onClick={handleCarouselClick(left)}/>
           <Image src={images[0]}/>
         <ChevronRightIcon onClick={handleCarouselClick(right)}/>
        </Flex>
    )
}

export default Carousel