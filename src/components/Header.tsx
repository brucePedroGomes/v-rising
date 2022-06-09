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
            bg="#801A30"
            fontSize="lg"
            as={Link}
            isExternal
            href="https://discord.com/invite/4qRsNkfF?utm_source=Discord%20Widget&utm_medium=Connect"
         >
            JUNTE-SE AO DISCORD
         </Button>
      </HStack>
   );
}
