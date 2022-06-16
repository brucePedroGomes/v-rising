import { Button, HStack, Img, Link } from "@chakra-ui/react";

export function Header() {
   return (
      <HStack
         w="full"
         justifyContent="space-between"
         padding="3"
         paddingX="20"
         bg="#1F2326"
      >
         <Img src={require("../assets/logo.png")} height="16" />
         <Button
            padding="6"
            bg="#1E90FF"
            fontSize="lg"
            as={Link}
            isExternal
            href="https://discord.gg/ZgfSDubn5M"
         >
            JUNTE-SE AO DISCORD
         </Button>
      </HStack>
   );
}
