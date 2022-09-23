import { Box, Flex, Grid, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react';
import { SkillCard } from './SkillCard';
import { SkillColumn } from './SkillColumn';

export const SkillList = () => {
  return (
    <>
      <Text fontWeight="bold" fontSize="3xl" textAlign="center" mb="3">
        Skills
      </Text>
      <Text textAlign="center" mb="10">
        ※触ったことがあるものの中で相対的に評価しています。(5段階)
      </Text>

      <Flex maxWidth="1200px" wrap="wrap" mx="auto" gap="10" justify="center">
        <SkillCard name="HTML/CSS" rating={4} imagePath="/html-5.svg" />
        <SkillCard name="JavaScript" rating={4} imagePath="/javascript.svg" />
        <SkillCard name="TypeScript" rating={3} imagePath="/typescript-icon.svg" />
        <SkillCard name="React" rating={3} imagePath="/react.svg" />
        <SkillCard name="Next.js" rating={4} imagePath="/nextjs-icon.svg" />
        <SkillCard name="Nest.js" rating={2} imagePath="/nestjs.svg" />
        <SkillCard name="Go" rating={2} imagePath="/go.svg" />
        <SkillCard name="Ruby/Rails" rating={2} imagePath="/rails.svg" />
        <SkillCard name="Python" rating={1} imagePath="/python.svg" />
        <Box w="250px" />
        <Box w="250px" />
        <Box w="250px" />
      </Flex>
    </>
  );
};
