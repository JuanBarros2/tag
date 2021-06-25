import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "../providers/QueryProvider";

export default function QueryInput() {
  const [query, setQuery] = useQuery();
  return (
    <Box>
      <InputGroup width={"full"} mb={10}>
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          bgColor="white"
          placeholder="Pesquisar por livro"
          value={query}
          width="full"
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
      </InputGroup>
    </Box>
  );
}
