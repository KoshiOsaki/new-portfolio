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
} from '@chakra-ui/react';
import style from '../styles/Profile.module.css';

export const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Grid h="200px" templateRows="repeat(5, 1fr)" templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem rowSpan={1} colSpan={1}>
          <Text>名前</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text>大崎 向士</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text>所属</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text>東京工業大学大学院 生命理工学コース</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text>研究室</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Link href="">小畠・三重研究室</Link>(タンパク質工学)
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text>趣味</Text>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Text>バイク、サッカー、音楽を聴くこと</Text>
        </GridItem>
      </Grid>
      <Box>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton _focus={{ _focus: 'none' }}>
                <Box flex="1" textAlign="left">
                  経歴
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>2022年 2022年</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
        <Button onClick={onOpen}>自己紹介スライド(2022年4月作製)</Button>
      </Box>
      <Box className={style.svg_container}>
        <Text fontSize="4xl">ああああ</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody>aaaa</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
