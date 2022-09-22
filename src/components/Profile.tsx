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

  return (
    <>
      {/* <Box h="500px">
        <iframe className="note-embed" src="https://note.com/embed/notes/na3e3811240f0" width="90%" height="400"></iframe>
        <iframe className="note-embed" src="https://note.com/embed/notes/n4a85a8be8a1c" width="90%" height="400"></iframe>
        <script async src="https://note.com/scripts/embed.js"></script>
      </Box> */}
      <Text fontWeight="bold" fontSize="3xl" mb="3" ml="2" mt="4">
        Profile
      </Text>
      <Stack>
        <Flex fontSize={{ base: 'md', md: 'lg' }}>
          <Text w="30%">名前</Text>
          <Text w="70%">大崎 向士</Text>
        </Flex>
        <Flex fontSize={{ base: 'md', md: 'lg' }}>
          <Text w="30%">所属</Text>
          <Text w="70%">東京工業大学大学院 生命理工学コース</Text>
        </Flex>
        <Flex fontSize={{ base: 'md', md: 'lg' }}>
          <Text w="30%">研究室</Text>
          <Text w="70%">
            <Link href="http://www.neobio.bio.titech.ac.jp/ja/" target="_blank">
              小畠・三重研究室
            </Link>
            　(タンパク質工学)
          </Text>
        </Flex>
        <Flex fontSize={{ base: 'md', md: 'lg' }}>
          <Text w="30%">趣味</Text>
          <Text w="70%">バイク、サッカー、音楽を聴くこと</Text>
        </Flex>
      </Stack>
      <Flex fontSize={{ base: 'md', md: 'lg' }} mt="6">
        <Text w="30%" fontWeight="semibold">
          Github
        </Text>
        <Link href="https://github.com/KoshiOsaki" target="_blank">
          https://github.com/KoshiOsaki
        </Link>
      </Flex>
      <Accordion defaultIndex={[1]} allowMultiple reduceMotion={false} w={{ base: '340px', sm: '500px' }} mt="2">
        <AccordionItem>
          <AccordionButton _focus={{ _focus: 'none' }} w={{ base: '340px', sm: '500px' }} position="absolute" className={style.button}>
            <Box flex="1" textAlign="left">
              経歴
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <Box position="relative" mt="40px" border="1px" borderColor="gray.300">
            <AccordionPanel pb={2}>2015年 　　神奈川県立横浜翠嵐高等学校 入学</AccordionPanel>
            <AccordionPanel pb={2}>2018年 　　東京工業大学 生命理工学系 入学</AccordionPanel>
            <AccordionPanel pb={2}>2021年7月〜2022年6月　株式会社FUTUREWOODS 長期インターン</AccordionPanel>
            <AccordionPanel pb={2}>2022年 　　東京工業大学大学院 生命理工学コース 入学</AccordionPanel>
          </Box>
        </AccordionItem>
      </Accordion>

      <Accordion defaultIndex={[1]} allowMultiple reduceMotion={false} w={{ base: '340px', sm: '500px' }} mt="2">
        <AccordionItem>
          <AccordionButton _focus={{ _focus: 'none' }} w={{ base: '340px', sm: '500px' }} position="absolute" className={style.button}>
            <Box flex="1" textAlign="left">
              インターン参加歴
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <Box position="relative" mt="40px" border="1px" borderColor="gray.300">
            <AccordionPanel pb={2}>
              <Link href="https://note.com/preview/na3e3811240f0?prev_access_key=a4d589df579639cdc858ca56e21ef88a " target="_blank">
                2022年5月　株式会社ワンキャリア (2days)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://note.com/preview/n4a85a8be8a1c?prev_access_key=05ff88cc89ecb4f822a44a608cf48ddd" target="_blank">
                2022年6月　パーソルキャリア株式会社 (5days)
              </Link>
            </AccordionPanel>

            <AccordionPanel pb={2}>
              <Link href=" https://note.com/preview/n610ecf2960a2?prev_access_key=6fc8af59bcee9e05c5f52b2df1a37d76" target="_blank">
                2022年7月　チームラボ株式会社 (2weeks)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://note.com/preview/n09634832172e?prev_access_key=0d7cedd97271cca70526563d537c46fd" target="_blank">
                2022年8月　株式会社グッドパッチ (1day)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://note.com/preview/n4440613c4da3?prev_access_key=0e6ad90aec26dd427ea3d856b7c20d9b" target="_blank">
                2022年8月　株式会社サイバーエージェント (2weeks)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>
              <Link href="https://note.com/preview/n73a634e4ec34?prev_access_key=8fce3e01526904195ec27fb86e92528c" target="_blank">
                2022年8月　ラクスル株式会社 (5days)
              </Link>
            </AccordionPanel>
            <AccordionPanel pb={2}>2022年9月　Sansan株式会社 (2weeks)</AccordionPanel>
            <AccordionPanel pb={2}>2022年9月　株式会社ギフティ (3days)</AccordionPanel>
            <AccordionPanel pb={2}>2022年10月　株式会社マネーフォワード (2weeks)</AccordionPanel>
          </Box>
        </AccordionItem>
      </Accordion>
      <Text
        onClick={onOpen}
        className={style.button}
        px="2"
        py="2"
        display={{ base: 'none', sm: 'inline-block' }}
        rounded="lg"
        mt="3"
        w={{ base: '340px', sm: '500px' }}
      >
        ビジョンプレゼン (2022年4月作製)
      </Text>
      {/* mobile */}
      <Link
        href="https://drive.google.com/file/d/1xfkNZi3GxRcpar_To-fQ8hvIaLLyUsN_/view?usp=sharing"
        target="_blank"
        className={style.button}
        px="2"
        py="2"
        display={{ base: 'inline-block', sm: 'none' }}
        rounded="lg"
        mt="3"
        w={{ base: '340px', sm: '500px' }}
      >
        ビジョンプレゼン (2022年4月作製)
      </Link>

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
