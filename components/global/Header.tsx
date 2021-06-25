import { Flex, Text, Box } from "@chakra-ui/layout";
import { Spacer, Avatar, Heading } from "@chakra-ui/react";
import React from "react";
import Breadcrumb from "./Breadcrumb";
export default function Header() {
  return (
    <Box pb={2} w="full" borderBottom="1px solid" borderColor="cyan.500" mb={8}>
      <Flex align="center" bgColor="white" w="full" gridGap={6}>
        <Heading color="cyan.700">Books!</Heading>
        <Spacer />
        <Text fontWeight={"bold"} color="cyan.700">
          Juan Barros
        </Text>
        <Avatar
          name="Juan Barros"
          borderRadius={4}
          my={4}
          h={8}
          w={8}
          src="https://avatars.githubusercontent.com/u/11728655?v=4"
        />
      </Flex>
      <Breadcrumb />
    </Box>
  );
}
