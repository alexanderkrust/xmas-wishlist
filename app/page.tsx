"use client";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { ItemGallery } from "./partials/ItemGallery";
import Snowfall from "react-snowfall";

const Page = () => {
  return (
    <ChakraProvider>
      <Box backgroundColor="gray.400" minHeight="100vh">
        <Snowfall
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            zIndex: 9999,
          }}
        />
        <ItemGallery />
      </Box>
    </ChakraProvider>
  );
};

export default Page;
