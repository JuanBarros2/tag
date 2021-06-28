import { Book, BookTag } from "model";
import React from "react";
import BookDetails from "./BookDetails";
import { render } from "../../utils/test-utils";
import faker from "faker";

const book = {
  author: faker.name.findName(),
  name: faker.lorem.words(),
  cover: {
    url: faker.image.imageUrl(),
  },
  curator: faker.name.findName(),
  edition: "Fevereiro de 2015",
  isbn: faker.datatype.string(9),
  numRatings: faker.datatype.uuid(),
  pages: faker.datatype.uuid(),
  objectId: faker.datatype.string(10),
  totalRatings: faker.datatype.uuid(),
  goodReadsRatings: faker.datatype.uuid(),
};

describe("BookDetails tests", () => {
  it("should render book details", () => {
    const { getByText } = render(
      <BookDetails book={book as unknown as Book} />
    );
    expect(getByText(book.author)).toBeInTheDocument();
    expect(getByText(book.name)).toBeInTheDocument();
    expect(getByText(`${book.pages} páginas`)).toBeInTheDocument();
    expect(getByText(`Edição: ${book.edition}`)).toBeInTheDocument();
    expect(getByText(`ISBN - ${book.isbn}`)).toBeInTheDocument();
  });
});
