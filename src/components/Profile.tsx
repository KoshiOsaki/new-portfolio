import {
  Box,
  Button,
  Grid,
  GridItem,
  Link,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Stack,
  List,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import style from '../styles/Profile.module.css';

export const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { width, height } = useWindowDimensions();
  const [mobile, setMobile] = useState(width <= 550 ? true : false);

  return (
    <>
      <Text fontWeight="bold" fontSize="3xl" mb="3" ml="2" mt="4">
        Profile
      </Text>
      <Stack>
        <Flex fontSize="lg">
          <Text w="30%">名前</Text>
          <Text w="70%">大崎 向士</Text>
        </Flex>
        <Flex fontSize="lg">
          <Text w="30%">所属</Text>
          <Text w="70%">東京工業大学大学院 生命理工学コース</Text>
        </Flex>
        <Flex fontSize="lg">
          <Text w="30%">研究室</Text>
          <Text w="70%">
            <Link href="http://www.neobio.bio.titech.ac.jp/ja/" target="_blank">
              小畠・三重研究室
            </Link>
            (タンパク質工学)
          </Text>
        </Flex>
        <Flex fontSize="lg">
          <Text w="30%">趣味</Text>
          <Text w="70%">バイク、サッカー、音楽を聴くこと</Text>
        </Flex>
      </Stack>
      <Flex fontSize="lg" mt="6">
        <Text w="30%" fontWeight="semibold">
          Github
        </Text>
        <Link href="https://github.com/KoshiOsaki" target="_blank">
          https://github.com/KoshiOsaki
        </Link>
      </Flex>
      <Accordion defaultIndex={[1]} allowMultiple reduceMotion={false} w={{ base: '340px', sm: '500px' }} top="400px" mt="2">
        <AccordionItem>
          <h2>
            <AccordionButton _focus={{ _focus: 'none' }} w={{ base: '340px', sm: '500px' }} position="absolute" className={style.button}>
              <Box flex="1" textAlign="left">
                経歴
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Box position="relative" mt="40px" border="1px" borderColor="gray.300">
            <AccordionPanel pb={2}>2015年 　　神奈川県立横浜翠嵐高等学校 入学</AccordionPanel>
            <AccordionPanel pb={2}>2018年 　　東京工業大学 生命理工学系 入学</AccordionPanel>
            <AccordionPanel pb={2}>2021年7月〜現在　株式会社FUTUREWOODS 長期インターン</AccordionPanel>
            <AccordionPanel pb={2}>2022年 　　東京工業大学大学院 生命理工学コース 入学</AccordionPanel>
            <AccordionPanel pb={2}>2022年5月　株式会社ワンキャリア 2Daysインターン</AccordionPanel>
          </Box>
        </AccordionItem>
      </Accordion>
      {mobile ? (
        <Link
          href="https://drive.google.com/file/d/1xfkNZi3GxRcpar_To-fQ8hvIaLLyUsN_/view?usp=sharing"
          target="_blank"
          className={style.button}
          px="2"
          py="2"
          display="inline-block"
          rounded="lg"
          mt="3"
          w={{ base: '340px', sm: '500px' }}
        >
          ビジョンプレゼン (2022年4月作製)
        </Link>
      ) : (
        <Text onClick={onOpen} className={style.button} px="2" py="2" display="inline-block" rounded="lg" mt="3" w={{ base: '340px', sm: '500px' }}>
          ビジョンプレゼン (2022年4月作製)
        </Text>
      )}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="5xl">
        <ModalOverlay />
        <ModalContent h="900px" py="8">
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody>
            <iframe src="/koshiosaki.pdf" width="100%" height="100%" frameBorder="0"></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
