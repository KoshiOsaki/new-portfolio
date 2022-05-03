import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import style from "../styles/Glass.module.css";

export const Glass: FC<BoxProps> = (props) => {
  const { children } = props;
  return (
    <Box className={style.default} {...props}>
      {children}
    </Box>
  );
};
