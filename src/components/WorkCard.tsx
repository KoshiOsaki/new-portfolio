import { Box, Img, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  img: string;
  link: string;
  skill: string;
  role: string;
  children: ReactNode;
}

export const WorkCard = ({
  title,
  img,
  link,
  skill,
  role,
  children,
}: Props) => {
  return (
    <Box w="30%" m="4">
      <Text textAlign="center" fontWeight="bold">
        {title}
      </Text>
      <Img src={img} />
    </Box>
  );
};
