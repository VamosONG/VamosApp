import React, { useState, useEffect } from 'react';
import { Box, Image, Badge, Avatar, Text, Flex,useMediaQuery,} from '@chakra-ui/react';
import { StarIcon, } from '@chakra-ui/icons';
import axios from 'axios';
import IconLove from '../../assets/icons/emojis/emojiLove.webp'
import IconHappy from '../../assets/icons/emojis/emojiHappy.webp'
import IconFunny from '../../assets/icons/emojis/emojiFunny.webp'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://vamosappserver.onrender.com/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error en la solicitud de reviews', error);
      }
    };

    fetchData();
  }, [])
  return (
    <>
      <Flex my='2' py='2' position={'relative'} w={{base: '100%', md: '100%'}} h={{base: 'auto', md: '100%'}} justifyContent="center" alignItems="center" >
        <Box p={'1.5rem'}
          width={{ base: "100%", md: "100%" }}
          height={{ base: "200px", md: "100%" }}
          position="relative" 
          bg={'gray.100'}
          >

          <Slider {...settings}>
            {reviews?.map((review) => (
              <Flex key={review.userId} w={{base:'300px', md: '350px'}}  borderWidth='1px' borderRadius='lg'  overflow='hidden'>
                <Box w={{base: '200px', md: 'auto'}}  p='1rem' bg={'white'} >
                  <Flex flexDirection={'row'} >
                    <Flex>
                      <Avatar src={review.qualification <= 3 ? (IconHappy) :review.qualification === 4 ? (IconFunny) : (IconLove)} />

                    </Flex>
                    <Flex ml='3' flexDirection={'column'} textAlign={'start'} width={'100%'} >
                      <Text fontWeight='bold'>
                        {review.userName ? review.userName : 'User Test'}
                      </Text>
                      <Text fontSize='sm'> {review.date}</Text>
                    </Flex>
                  </Flex>
                  <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                    {review.comments}
                  </Box>

                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon key={i} color={i < review.qualification ? 'yellow.500' : 'gray.300'} />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='md'>
                      <Text>

                        {review.qualification} Estrellas
                        <Badge borderRadius='full' px='2' colorScheme='teal' right={'1rem'}>
                          New
                        </Badge>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            ))}
          </Slider>
        </Box>
      </Flex>
    </>
  );
};

export default Testimonials;
