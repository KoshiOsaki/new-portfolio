import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Img } from '@chakra-ui/react';
import { useState } from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import style from '../styles/PhotoSlider.module.css';

export const PhotoSlider = () => {
  const { width, height } = useWindowDimensions();
  const [mobile, setMobile] = useState(width <= 480 ? 380 : 430);

  return (
    <Box position="relative" w={{ base: '380px', sm: '430px' }} mx="auto">
      <Flex overflowX="hidden" className={style.main} id="swiper">
        <Box minWidth={{ base: '380px', sm: '430px' }}>
          <Img src="/koshi.jpg" w={{ base: '380px', sm: '430px' }} userSelect="none"></Img>
        </Box>
        <Box minWidth={{ base: '380px', sm: '430px' }}>
          <Img src="/bike.jpg" w={{ base: '380px', sm: '430px' }} userSelect="none" pt="45px"></Img>
        </Box>
        <Box minWidth={{ base: '380px', sm: '430px' }}>
          <Img src="/baccano.jpg" w={{ base: '380px', sm: '430px' }} userSelect="none" pt="35px"></Img>
        </Box>
      </Flex>

      <div
        className={style.arrow_left}
        onClick={() => {
          const elm = document.getElementById('swiper');
          elm && elm.scroll(elm.scrollLeft - mobile, 260);
        }}
      >
        <ArrowBackIcon />
      </div>
      <div
        className={style.arrow_right}
        onClick={() => {
          const elm = document.getElementById('swiper');
          elm && elm.scroll(elm.scrollLeft + mobile, 260);
        }}
      >
        <ArrowForwardIcon />
      </div>
    </Box>
  );
};
