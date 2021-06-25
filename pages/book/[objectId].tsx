import { Container } from "@chakra-ui/react";
import { Book, BookTag } from "model";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import React from "react";
import { Header, BookDetails } from "../../components";
import books from "../../data/books";

export default function BookPage({ book }: { book: Book }) {
  return (
    <Container maxW={["sm", "md", "lg", "3xl"]} centerContent p={2}>
      <Header></Header>
      <BookDetails book={book} />
    </Container>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: books.map((book: BookTag) => ({
      params: { objectId: book.objectId },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({
  params: { objectId },
}): Promise<GetStaticPropsResult<{ book: Book }>> => {
  const book = books.find((book) => objectId === book.objectId);
  const { isbn } = book;
  const key = process.env.GOOD_READS_KEY;
  const goodReadsURL = process.env.GOOD_READS_URL;
  const url = `${goodReadsURL}/book/review_counts.json?isbns[]=${isbn}&key=${key}`;

  const result = await fetch(url);
  const { books: goodReadsBooks } = await result.json();
  return {
    props: {
      book: {
        ...book,
        goodReadsRatings: goodReadsBooks[0].reviews_count,
      },
    },
  };
};
