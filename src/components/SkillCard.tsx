import { StarIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  name: string;
  rating: number;
  imagePath: string;
}

export const SkillCard = (props: Props) => {
  return (
    <Box w="250px" h="250px" bg="white" shadow="xl" rounded="lg" p="4" textAlign="center" borderWidth="1px">
      <Text>{props.name}</Text>
      <Box mb="2">
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon key={i} color={i < props.rating ? 'orange.300' : 'gray.300'} w={5} />
          ))}
      </Box>

      <Image src={props.imagePath} width={140} height={140} />
    </Box>
  );
};
