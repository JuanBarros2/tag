import React from "react";
import BookItem from "./BookItem";
import { render } from "../../utils/test-utils";
import { BookTag } from "model";
import faker from "faker";

const book = {
  name: faker.lorem.words(),
  author: faker.name.findName(),
  cover: {
    url: faker.image.imageUrl(),
  },
  edition: "Fevereiro de 2015",
};

describe("BookItem tests", () => {
  it("should render book info", () => {
    const { getByText } = render(<BookItem book={book as BookTag} />);
    expect(getByText(book.name)).toBeInTheDocument();
  });
});
