import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Img } from '@chakra-ui/react';
import style from '../styles/PhotoSlider.module.css';

export const PhotoSlider = () => {
  return (
    <Box position="relative" w="430px">
      <Flex overflowX="hidden" className={style.main} id="swiper">
        <Box minWidth="430px">
          <Img src="/koshi.jpg" w="430px" userSelect="none"></Img>
        </Box>
        <Box minWidth="430px">
          <Img src="/bike.jpg" w="430px" userSelect="none" pt="45px"></Img>
        </Box>
        <Box minWidth="430px">
          <Img src="/baccano.jpg" w="430px" userSelect="none" pt="35px"></Img>
        </Box>
      </Flex>

      <div
        className={style.arrow_left}
        onClick={() => {
          const elm = document.getElementById('swiper');
          elm && elm.scroll(elm.scrollLeft - 430, 260);
        }}
      >
        <ArrowBackIcon />
      </div>
      <div
        className={style.arrow_right}
        onClick={() => {
          const elm = document.getElementById('swiper');
          elm && elm.scroll(elm.scrollLeft + 430, 260);
        }}
      >
        <ArrowForwardIcon />
      </div>
    </Box>
  );
};
