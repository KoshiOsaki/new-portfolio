import { Box, Flex, Link, Text } from '@chakra-ui/react';
import style from '../styles/Header.module.css';
import { Glass } from './Glass';

export const Header = () => {
  return (
    <div className={style.container}>
      <Glass h="140px">
        <Flex py="3" px="10" justifyContent="space-between">
          <Text fontSize={{ sm: '5xl', md: '6xl', lg: '7xl' }} fontWeight="bold" className={style.title}>
            Koshi&apos;s Portfolio
          </Text>
          <Text pt="70px" pr={{ sm: '0', md: '20', lg: '36' }}>
            2022/05/03 更新
          </Text>
        </Flex>
      </Glass>
    </div>
  );
};
