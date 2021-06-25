import {
  Center,
  CircularProgress,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BookTag } from "model";
import React, { useMemo } from "react";
import { useQuery } from "../providers/QueryProvider";
import BookItem from "./BookItem";

export default function BookList({ books }: { books: BookTag[] }) {
  const [query] = useQuery();
  const filteredBooks = useMemo(
    () =>
      query !== ""
        ? books.filter(
            (book) =>
              book.name.toLocaleLowerCase().search(query.toLocaleLowerCase()) >=
              0
          )
        : books,
    [query]
  );

  const columns = [
    1,
    1,
    Math.min(2, filteredBooks.length),
    Math.min(3, filteredBooks.length),
  ];

  return (
    <>
      <SimpleGrid columns={columns} gap={2} w="full">
        {filteredBooks.length == 0 ? (
          <Text>Nenhum personagem encontrado</Text>
        ) : (
          filteredBooks.map((book) => (
            <BookItem key={book.objectId} book={book} />
          ))
        )}
      </SimpleGrid>
    </>
  );
}
