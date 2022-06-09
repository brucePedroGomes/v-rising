import { Box, HStack, VStack } from "@chakra-ui/react";

export function Frames() {
   return (
      <HStack paddingTop="20">
         <VStack>
            <Box
               as="iframe"
               title="server"
               src="https://api.trackyserver.com/widget/tracky?id=1960885&color1=000000&color4=FFFFFF"
               width="350"
               height="180"
               frameBorder="0px"
               bg="black"
               borderRadius="20"
            />
            <Box
               as="iframe"
               title="server"
               src="https://api.trackyserver.com/widget/tracky?id=1959571&color1=000000&color4=FFFFFF"
               width="350"
               height="180"
               frameBorder="0px"
               bg="black"
               borderRadius="20"
            />
         </VStack>

         <Box
            as="iframe"
            title="discord"
            src="https://discord.com/widget?id=983506417292017704&theme=dark"
            width="350"
            height="360"
            frameBorder="0px"
            bg="black"
            borderRadius="20"
         />
      </HStack>
   );
}
