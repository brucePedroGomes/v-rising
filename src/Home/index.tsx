import { Box, Text, HStack, Flex, VStack } from "@chakra-ui/react";
import { Frames } from "../components/Frames";

export function Home() {
   return (
      <Box padding="8" minH="100vh" w="full">
         <Flex w="full" justifyContent="center" alignContent="center">
            <Text fontSize="6xl"> MESTRE DA NOITE </Text>
         </Flex>

         <HStack w="full" justifyContent="space-around">
            <VStack>
               <Text fontSize="6xl">
                  O MELHOR SERVER <br />
                  DE{" "}
                  <Text as="span" color="#1E90FF">
                     V RISING
                  </Text>{" "}
                  DO
                  <br /> BRASIL
               </Text>
               <Box w="full">
                  <Text pt="20" fontSize="xl" color="gray.300">
                     SEM LAG!!! ♡
                  </Text>
                  <Text>Fazemos nossos servidores pensando em você</Text>
               </Box>
            </VStack>

            <Frames />
         </HStack>
      </Box>
   );
}
