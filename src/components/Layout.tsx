import { FC } from 'react';
import { Header } from './Header';
import style from '../styles/Layout.module.css';
import { Box } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box position="relative" overflow="hidden" pb="800px">
      <Header />
      <Box pt="200px">{children}</Box>

      <>
        <div className={style.circle1} />
        <div className={style.circle2} />
      </>

      <div className={style.circle3} />
      <div className={style.circle4} />

      <div
        style={{
          position: 'absolute',
          zIndex: -100,
          top: String(2400) + 'px',
          right: '-150px',
          margin: 'auto',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle farthest-side, #4de189, transparent)',
        }}
      />

      <div className={style.circle7} />
      <div className={style.circle8} />
      <div className={style.circle9} />
    </Box>
  );
};
