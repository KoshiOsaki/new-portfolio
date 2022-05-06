import { Box, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import { SkillColumn } from './SkillColumn';

export const SkillList = () => {
  return (
    <>
      <Text fontWeight="bold" fontSize="3xl" textAlign="center" mb="10">
        Skills
      </Text>

      <Box textAlign="center" mx="auto">
        <SkillColumn name="JavaScript/TypeScript" level={9} />
        <SkillColumn name="React/Next.js" level={9} />
        <SkillColumn name="Node.js" level={8} />
        <SkillColumn name="Nest.js" level={7} />
        <SkillColumn name="HTML/CSS" level={10} />
        <SkillColumn name="Python" level={6} />
        <SkillColumn name="SQL" level={5} />
        <SkillColumn name="Docker, Github" level={6} />
      </Box>
    </>
  );
};
