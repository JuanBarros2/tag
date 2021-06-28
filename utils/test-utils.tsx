import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import QueryProvider from "../components/providers/QueryProvider";

const Providers = ({ children }) => {
  return (
    <QueryProvider>
      <ChakraProvider>{children}</ChakraProvider>;
    </QueryProvider>
  );
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
