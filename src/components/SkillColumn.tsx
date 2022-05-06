import { Box, Flex, Text } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import style from '../styles/SkillColumn.module.css';
import 'animate.css';
import { FadeIn } from './FadeIn';

interface Props {
  name: string;
  level: number;
}

export const SkillColumn = ({ name, level }: Props) => {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  const stars: any = [];
  const skillStar = (num: any): any => {
    for (var i = 1; i <= 9; i++) {
      stars.push(
        i <= num - 1 ? <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box> : <Box w="20%" h="40px"></Box>,
      );
    }
    return stars;
  };

  return (
    <Flex justify="center" mt="8">
      <Text w={{ base: '20%', sm: '30%' }} fontSize={{ base: 'xs', sm: 'md' }} pt="2" maxWidth="400px">
        {name}
      </Text>
      {level == 10 ? (
        <div ref={ref} style={{ width: '100%', maxWidth: '1000px' }}>
          {inView && (
            <Box position="relative">
              <Flex w="100%" position="absolute">
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400" borderStartRadius="xl"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderEndRadius="xl"></Box>
              </Flex>
              <Flex w="100%" position="absolute" zIndex="1" className={style.anime}>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400" borderStartRadius="xl"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="orange" borderEndRadius="xl"></Box>
              </Flex>
            </Box>
          )}
        </div>
      ) : (
        <div ref={ref} style={{ width: '100%', maxWidth: '1000px' }}>
          {inView && (
            <Box position="relative">
              <Flex w="100%" position="absolute">
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400" borderStartRadius="xl"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
                <Box w="20%" h="40px" bgColor="gray.100" borderEndRadius="xl"></Box>
              </Flex>
              <Flex w="100%" position="absolute" zIndex="1" className={style.anime}>
                <Box w="20%" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400" borderStartRadius="xl"></Box>
                {skillStar(level)}
              </Flex>
            </Box>
          )}
        </div>
      )}
    </Flex>
  );
};
