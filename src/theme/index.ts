// 2. Add your color mode config

import { extendTheme } from "@chakra-ui/react";

const config = {
   initialColorMode: "dark",
   useSystemColorMode: false,
};

// 3. extend the theme
export const theme = extendTheme({
   config,
   fonts: {
      heading: `'Philosopher', sans-serif`,
      body: `'Philosopher', sans-serif`,
   },
});
