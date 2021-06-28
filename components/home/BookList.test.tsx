import React from "react";
import BookList from "./BookList";
import { render } from "../../utils/test-utils";
import { BookTag } from "model";
import faker from "faker";

const books = [
  {
    name: faker.lorem.words(),
    author: faker.name.findName(),
    cover: {
      url: faker.image.imageUrl(),
    },
    edition: "Fevereiro de 2015",
    objectId: faker.datatype.string(4),
  },
  {
    name: faker.lorem.words(),
    author: faker.name.findName(),
    cover: {
      url: faker.image.imageUrl(),
    },
    edition: "Março de 2015",
    objectId: faker.datatype.string(3),
  },
];

describe("BookList tests", () => {
  it("should render empty book list", () => {
    const { getByText } = render(<BookList books={[]} />);
    expect(getByText("Nenhum personagem encontrado")).toBeInTheDocument();
  });

  books.forEach((book) =>
    it("should render book item", () => {
      const { getByText } = render(<BookList books={books as BookTag[]} />);
      expect(getByText(book.name)).toBeInTheDocument();
      expect(getByText(book.edition)).toBeInTheDocument();
    })
  );
});
