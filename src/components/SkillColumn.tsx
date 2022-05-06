import { Box, Flex, Text } from '@chakra-ui/react';

interface Props {
  name: string;
  level: number;
}

export const SkillColumn = ({ name, level }: Props) => {
  //   const data = [];
  //   for (var i = 1; i <= level; i++) {
  //     if (level - i >= 0) {
  //       data.push(<Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>);
  //     } else {
  //       data.push(<Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>);
  //     }
  //   }
  const stars: any = [];
  const skillStar = (num: any): any => {
    for (var i = 0; i < 5; i++) {
      stars.push(
        i < num ? (
          <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
        ) : (
          <Box w="100px" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
        ),
      );
    }
    return stars;
  };

  return (
    <Flex justify="center" maxWidth="1000px" mt="6">
      <Text w={{ base: '20%', sm: '30%' }} fontSize={{ base: 'xs', sm: 'md' }} maxWidth="300px" pt="2">
        {name}
      </Text>
      <Flex w={{ base: '70%', sm: '50%' }} maxWidth="700px">
        {level == 3 ? (
          <>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400" borderStartRadius="xl"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="gray.100" borderEndRadius="xl"></Box>
          </>
        ) : level == 4 ? (
          <>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400" borderStartRadius="xl"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="gray.100" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="gray.100" borderEndRadius="xl"></Box>
          </>
        ) : (
          <>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400" borderStartRadius="xl"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderRight="1px solid" borderColor="gray.400"></Box>
            <Box w="100px" h="40px" bgColor="orange" borderEndRadius="xl"></Box>
          </>
        )}
      </Flex>
    </Flex>
  );
};
