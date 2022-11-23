import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export const Card = ({ image, label, brand, price, link }) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={["full", "80vw", "350px"]}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded="lg"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundColor: "teal.200",
            filter: "blur(20px)",
            zIndex: -1,
          }}
        >
          <Image
            width={350}
            height={600}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={image}
            alt={`${brand} ${label}`}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {brand}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {label}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price}
            </Text>
          </Stack>
          <Stack>
            <Button
              marginTop="4"
              colorScheme="teal"
              rightIcon={<FiArrowRight />}
              _hover={{
                bg: "teal.600",
              }}
            >
              <Link href={link} target="_blank" rel="noopener">
                Bestellen
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
