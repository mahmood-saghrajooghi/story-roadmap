import { Box } from "@chakra-ui/layout";
import { Header } from "./Header";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Box h="100vh" w="100vw" overflow="auto">
      <Header />
      {children}
    </Box>
  );
};
