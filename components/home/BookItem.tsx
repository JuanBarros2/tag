import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import { BookTag } from "model";
import { useRouter } from "next/router";
import React from "react";

export default function BookItem({
  book: { name, cover, objectId, edition },
}: {
  book: BookTag;
}) {
  const router = useRouter();

  const redirectDetails = () => {
    router.push(`/book/${objectId}`);
  };

  const { url } = cover;

  return (
    <Flex
      w="full"
      justify="start"
      bgColor="white"
      align="center"
      borderRadius={4}
      boxShadow={"0 0 5px #00000033"}
      onClick={() => redirectDetails()}
      sx={{
        cursor: "pointer",
      }}
      gridGap={5}
      pr={4}
    >
      <Image
        h={[150, 150, 20, 20]}
        src={`${url}`}
        borderRadius={4}
        bgColor="black"
      />
      <Flex align="start" my={2} direction="column">
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="xs">{edition}</Text>
      </Flex>
    </Flex>
  );
}
