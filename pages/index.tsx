import React from "react";
import { GetStaticPropsResult } from "next";
import allBooks from "../data/books";
import { BookTag } from "model";

import { Container } from "@chakra-ui/react";
import moment from "moment";
import { BookList, Header, QueryInput } from "../components";

export default function Home({ books }) {
  return (
    <Container maxW={["sm", "md", "lg", "3xl"]} centerContent p={2}>
      <Header></Header>
      <QueryInput />
      <BookList books={books} />
    </Container>
  );
}

export function getStaticProps(): GetStaticPropsResult<{ books: BookTag[] }> {
  const books = allBooks.sort((first: BookTag, second: BookTag) => {
    const getDate = (dateString: BookTag): Date => {
      const [month, _, year] = dateString.edition.split(" ");
      moment.locale("pt-br");
      const date = moment().month(month).year(Number(year));
      return date.toDate();
    };

    return getDate(second).valueOf() - getDate(first).valueOf();
  });
  return {
    props: {
      books,
    },
  };
}
