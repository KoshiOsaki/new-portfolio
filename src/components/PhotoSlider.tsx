import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Img } from '@chakra-ui/react';
import { useState } from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import style from '../styles/PhotoSlider.module.css';

export const PhotoSlider = () => {
  const { width, height } = useWindowDimensions();
  const [mobile, setMobile] = useState(width <= 480 ? 380 : 430);
  const [photo, setPhoto] = useState(30);

  const onClickSlide = (isForword: boolean) => {
    isForword ? setPhoto(photo + 1) : setPhoto(photo - 1);
  };

  return (
    <Box position="relative" w={{ base: '380px', sm: '430px' }} h={{ base: '535px', sm: '596px' }} mx="auto">
      {photo % 3 == 0 ? (
        <Img src="/koshi.jpg" w={{ base: '380px', sm: '430px' }} userSelect="none"></Img>
      ) : photo % 3 == 2 ? (
        <Img src="/bike.jpg" w={{ base: '380px', sm: '430px' }} userSelect="none" pt="45px"></Img>
      ) : (
        <Img src="/baccano.jpg" w={{ base: '380px', sm: '430px' }} userSelect="none" pt="35px"></Img>
      )}

      {/* <Flex position="absolute" justify="center">
        <Box bgColor="transparent">・</Box>
        <Box>・</Box>
        <Box>・</Box>
      </Flex> */}

      <div className={style.arrow_left} onClick={() => onClickSlide(false)}>
        <ArrowBackIcon />
      </div>
      <div className={style.arrow_right} onClick={() => onClickSlide(true)}>
        <ArrowForwardIcon />
      </div>

      {/* <Flex overflowX="hidden" className={style.main} id="swiper">
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
      </div> */}
    </Box>
  );
};
