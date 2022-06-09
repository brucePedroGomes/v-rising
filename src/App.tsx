import { Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";

import { Home } from "./Home";
import { theme } from "./theme";

export const App = () => (
   <ChakraProvider theme={theme}>
      <Box
         w="full"
         background="linear-gradient(140.98deg, #000000 27.58%, #120206 50.88%, #1E90FF 74.65%)"
      >
         <Header />
         <Home />
      </Box>
   </ChakraProvider>
);
