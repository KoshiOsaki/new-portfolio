import { Box, Link } from "@chakra-ui/react";
import style from "../styles/Header.module.css";
import { Glass } from "./Glass";

export const Header = () => {
  return (
    <div className={style.container}>
      <Glass h="200px">
        <Box>
          <Link href="/" fontSize="7xl" fontWeight="bold">
            Koshi&apos;s Portfolio
          </Link>
        </Box>
      </Glass>
    </div>
  );
};
