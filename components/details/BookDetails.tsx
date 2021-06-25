import { Box, Flex, Image, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import { Book } from "model";
import React from "react";

export default function BookDetails({
  book: {
    name,
    author,
    pages,
    curator,
    edition,
    isbn,
    totalRatings,
    goodReadsRatings,
    cover: { url },
  },
}: {
  book: Book;
}) {
  return (
    <Box>
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing="10px"
        borderWidth={1}
        borderRadius="lg"
        overflow="hidden"
        bgColor="white"
        my={4}
        gridGap={2}
      >
        <Image src={url} />
        <Flex
          direction="column"
          mx={8}
          my={4}
          align="center"
          justify="center"
          gridGap={1}
        >
          <HStack gridGap={1} align="baseline" justify="center" mb={4}>
            <Text as="h2" fontWeight="bold" fontSize="xl" textAlign="center">
              {name}
            </Text>
            <Text fontStyle="oblique" fontWeight="thin" textAlign="center">
              {author}
            </Text>
          </HStack>
          <Text fontSize="sm">{`${pages} páginas`}</Text>
          <Text fontSize="sm">{`Curadoria de: ${curator}`}</Text>
          <Text fontSize="sm">{`Edição: ${edition}`}</Text>
          <Text fontSize="sm">{`ISBN - ${isbn}`}</Text>
          <SimpleGrid
            autoFlow="column"
            alignItems="baseline"
            gridGap={4}
            my={4}
          >
            <Flex direction="column" alignItems="center">
              <Text fontSize="sm" textAlign="center">
                Avaliações da Tag
              </Text>
              <Text fontWeight="bold">{totalRatings}</Text>
            </Flex>
            <Flex direction="column" alignItems="center">
              <Text fontSize="sm" textAlign="center">
                Avaliações da GoodReads
              </Text>
              <Text fontWeight="bold">{goodReadsRatings}</Text>
            </Flex>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
