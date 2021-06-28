import { Book } from "model";
import React from "react";
import BookDetails from "./BookDetails";
import { screen, render } from "../../utils/test-utils";

const book: Book = {
  author: "Stephen King",
  name: "It",
  blocked: false,
  cover: {
    __type: "URL",
    name: "It",
    url: "https://a-static.mlcdn.com.br/1500x1500/livro-it-a-coisa/magazineluiza/210947500/90e218266e0acd82a0019e3158d3269b.jpg",
  },
  createdAt: "",
  curator: "Juan Barros",
  edition: "Fevereiro de 2015",
  isbn: "9788560280940",
  numRatings: 312,
  pages: 1541,
  active: true,
  objectId: "doa2131i2",
  updatedAt: "",
  totalRatings: 412,
  goodReadsRatings: 132,
};

describe("BookDetails tests", () => {
  it("should render book details", () => {
    const { getByText } = render(<BookDetails book={book} />);
    expect(getByText(book.author)).toBeInTheDocument();
    expect(getByText(book.name)).toBeInTheDocument();
    expect(getByText(`${book.pages} páginas`)).toBeInTheDocument();
    expect(getByText(`Edição: ${book.edition}`)).toBeInTheDocument();
    expect(getByText(`ISBN - ${book.isbn}`)).toBeInTheDocument();
  });
});
