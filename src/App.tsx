import { ChakraProvider } from "@chakra-ui/react";
import { MainView } from "./Containers/MainView";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <MainView />
    </ChakraProvider>
  );
}

export default App;
