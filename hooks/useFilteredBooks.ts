import { BookTag } from "model";
import { useMemo } from "react";
import { useQuery } from "../components/providers/QueryProvider";

export default function useFilteredBooks(books: BookTag[]) {
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
    return filteredBooks
}