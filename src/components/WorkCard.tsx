import { ReactNode } from 'react';
import { Box, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Img } from '@chakra-ui/react';
import style from '../styles/WorkCard.module.css';
interface Props {
  title: string;
  img: string;
  link: string;
  skill: string;
  role: string;
  children: ReactNode;
}

export const WorkCard = ({ title, img, link, skill, role, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w="30%" m="4" onClick={onOpen} className={style.shake}>
        <Text textAlign="center" fontWeight="bold">
          {title}
        </Text>
        <Img src={img} />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
