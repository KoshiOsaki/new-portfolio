import { Box, Flex, Icon, Img } from "@chakra-ui/react";
import style from "../styles/PhotoSlider.module.css";

export const PhotoSlider = () => {
  return (
    <Box position="relative" w="330px">
      <Flex overflowX="scroll" className={style.main} id="swiper">
        <Box minWidth="430px">
          <Img src="/koshi.jpg" w="300px"></Img>
        </Box>
        <Box minWidth="430px">
          <Img src="/bike.jpg" w="300px"></Img>
        </Box>
        <Box minWidth="430px">
          <Img src="/baccano.jpg" w="300px"></Img>
        </Box>
      </Flex>
      <Box
        className={style.arrow_left}
        onClick={() => {
          const elm = document.getElementById("swiper");
          elm && elm.scroll(elm.scrollLeft - 430, 260);
        }}
      >
        <Icon></Icon>
      </Box>

      <div
        className={style.arrow_left}
        onClick={() => {
          const elm = document.getElementById("swiper");
          elm && elm.scroll(elm.scrollLeft - 430, 260);
        }}
      >
        <span className="material-icons align-middle text-gray-600">
          arrow_back
        </span>
      </div>
      <div
        className={style.arrow_right}
        onClick={() => {
          const elm = document.getElementById("swiper");
          elm && elm.scroll(elm.scrollLeft + 430, 260);
        }}
      >
        <span className="material-icons align-middle text-gray-600">
          arrow_forward
        </span>
      </div>
    </Box>
  );
};
