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
      <Box w={{ sm: '280px', md: '320px', lg: '400px' }} h="330px" mx="5" my="9" onClick={onOpen} className={style.shake} p="2">
        <Text textAlign="center" fontWeight="bold">
          {title}
        </Text>
        <Center h="280px">
          <Img src={img} borderRadius="lg" />
        </Center>
      </Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent h="650px" className={style.modal} overflow="scroll">
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody py="7" px={{ base: '1', md: '10' }}>
            <Text fontWeight="bold" fontSize="xl" mb="3">
              {title}
            </Text>
            <Text fontSize="sm" textColor="gray.700" textAlign="center">
              {description}
            </Text>
            {link == 'none' ? (
              <Box w="70%" overflow="hidden" mx="auto">
                <Img src={img} w="100%" mx="auto" />
              </Box>
            ) : link == 'gif' ? (
              <Box w="70%" overflow="hidden" mx="auto">
                <Img src="/syukkou.gif" w="100%" mx="auto" />
              </Box>
            ) : (
              <Link href={link} target="_blank">
                <Box w="70%" overflow="hidden" mx="auto" border="1px" borderColor="gray.300">
                  <Img src={img} w="100%" mx="auto" className={style.image} />
                </Box>
              </Link>
            )}

            <Flex mt="3" mb="6" px="20">
              <Box w="50%">
                <Box
                  display="inline-block"
                  px="1"
                  fontSize="xs"
                  fontWeight="semibold"
                  rounded="sm"
                  className={style.badge_ora}
                  m="1"
                  textColor="orange.800"
                  boxShadow="0 0 3px 3px rgba(0, 0, 0, 0.1)"
                >
                  使用技術
                </Box>

                <Text fontSize="sm">{skill}</Text>
              </Box>
              <Box w="50%">
                <Box
                  display="inline-block"
                  px="1"
                  fontSize="xs"
                  fontWeight="semibold"
                  rounded="sm"
                  className={style.badge_pi}
                  m="1"
                  textColor="pink.800"
                  boxShadow="0 0 3px 3px rgba(0, 0, 0, 0.1)"
                >
                  担当
                </Box>
                <Text fontSize="sm">{role}</Text>
              </Box>
            </Flex>
            <Box mx="20" letterSpacing="wide">
              {children}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
