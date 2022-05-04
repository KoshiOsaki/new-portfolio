import { Box, Flex, Text } from '@chakra-ui/react';

interface Props {
  name: string;
  level: number;
}

export const SkillColumn = ({ name, level }: Props) => {
  return (
    <Flex>
      <Text>{name}</Text>
      <Box></Box>
    </Flex>
  );
};
