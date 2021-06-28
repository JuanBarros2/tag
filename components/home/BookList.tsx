import { SimpleGrid, Text } from "@chakra-ui/react";
import { BookTag } from "model";
import React from "react";
import useFilteredBooks from "../../hooks/useFilteredBooks";
import BookItem from "./BookItem";

export default function BookList({ books }: { books: BookTag[] }) {
  const filteredBooks = useFilteredBooks(books);
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
