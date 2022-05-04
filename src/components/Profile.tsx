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
} from '@chakra-ui/react';
import style from '../styles/Profile.module.css';

export const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="80%">
      <Stack>
        <Flex>
          <Text w="30%">名前</Text>
          <Text w="70%">大崎 向士</Text>
        </Flex>
        <Flex>
          <Text w="30%">所属</Text>
          <Text w="70%">東京工業大学大学院 生命理工学コース</Text>
        </Flex>
        <Flex>
          <Text w="30%">研究室</Text>
          <Text w="70%">
            <Link href="http://www.neobio.bio.titech.ac.jp/ja/" target="_blank">
              小畠・三重研究室
            </Link>
            (タンパク質工学)
          </Text>
        </Flex>
        <Flex>
          <Text w="30%">趣味</Text>
          <Text w="70%">バイク、サッカー、音楽を聴くこと</Text>
        </Flex>
      </Stack>
      <Box>
        <Accordion defaultIndex={[0]} allowMultiple reduceMotion={false}>
          <AccordionItem>
            <h2>
              <AccordionButton _focus={{ _focus: 'none' }}>
                <Box flex="1" textAlign="left">
                  経歴
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>2015年 神奈川県立横浜翠嵐高等学校 入学</AccordionPanel>
            <AccordionPanel pb={4}>2018年 東京工業大学 生命理工学系 入学</AccordionPanel>
            <AccordionPanel pb={4}>2021年7月〜現在 株式会社FUTUREWOODS 長期インターン</AccordionPanel>
            <AccordionPanel pb={4}>2022年 東京工業大学大学院 生命理工学コース 入学</AccordionPanel>
            <AccordionPanel pb={4}>2022年5月 株式会社ワンキャリア 2Daysインターン</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
        <Button onClick={onOpen}>自己紹介スライド(2022年4月作製)</Button>
      </Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="5xl">
        <ModalOverlay />
        <ModalContent h="700px">
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody>
            <iframe src="/koshiosaki.pdf" width="100%" height="100%"></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
