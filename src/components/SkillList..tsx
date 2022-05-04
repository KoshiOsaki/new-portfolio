import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { SkillColumn } from './SkillColumn';

export const SkillList = () => {
  return (
    <>
      <Text fontWeight="bold" fontSize="2xl" textAlign="center">
        Skills
      </Text>
      <Stack>
        <SkillColumn name="JavaScript/TypeScript" level={5} />
        <SkillColumn name="React/Next.js" level={5} />
        <SkillColumn name="Node.js" level={4} />
        <SkillColumn name="Nest.js" level={4} />
        <SkillColumn name="HTML/CSS" level={5} />
        <SkillColumn name="Python" level={3} />
        <SkillColumn name="SQL" level={3} />
        <SkillColumn name="Docker, Github" level={3} />
      </Stack>
    </>
  );
};
