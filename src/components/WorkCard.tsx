import { ReactNode } from 'react';
import {
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Img,
  Center,
  Link,
  Badge,
  Flex,
} from '@chakra-ui/react';
import style from '../styles/WorkCard.module.css';
interface Props {
  title: string;
  img: string;
  link: string;
  skill: string;
  role: string;
  description: string;
  children: ReactNode;
}

export const WorkCard = ({ title, img, link, skill, role, description, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w="400px" h="330px" mx="4" my="9" onClick={onOpen} className={style.shake} p="2">
        <Text textAlign="center" fontWeight="bold">
          {title}
        </Text>
        <Center h="280px">
          <Img src={img} borderRadius="lg" />
        </Center>
      </Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="5xl">
        <ModalOverlay />
        <ModalContent w="900px" h="700px" className={style.modal}>
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody py="7" px="10">
            <Text fontWeight="bold" fontSize="xl" mb="3">
              {title}
            </Text>
            <Text fontSize="sm" textColor="gray.600" textAlign="center">
              {description}
            </Text>
            {link == 'gif' ? (
              <>
                <Box w="70%" overflow="hidden" mx="auto">
                  <Img src="/syukkou.gif" w="100%" mx="auto" />
                </Box>
              </>
            ) : (
              <>
                <Link href={link} target="_blank">
                  <Box w="80%" overflow="hidden" mx="auto" border="1px" borderColor="gray.300">
                    <Img src={img} w="100%" mx="auto" my="6" className={style.image} />
                  </Box>
                </Link>
              </>
            )}

            <Flex my="3" px="20">
              <Box w="50%">
                <Badge p="1" colorScheme="cyan">
                  使用技術
                </Badge>
                <Text fontSize="sm">{skill}</Text>
              </Box>
              <Box w="50%">
                <Badge py="1" px="2" colorScheme="green">
                  担当
                </Badge>
                <Text fontSize="sm">{role}</Text>
              </Box>
            </Flex>
            <Box px="20">{children}</Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
