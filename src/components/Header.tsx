import { Box, Link, Text } from '@chakra-ui/react';
import style from '../styles/Header.module.css';
import { Glass } from './Glass';

export const Header = () => {
  return (
    <div className={style.container}>
      <Glass h="200px">
        <Box py="10" px="10">
          <Text fontSize="7xl" fontWeight="bold" className={style.title}>
            Koshi&apos;s Portfolio
          </Text>
        </Box>
      </Glass>
    </div>
  );
};
