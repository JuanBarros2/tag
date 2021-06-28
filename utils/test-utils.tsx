import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";

const Providers = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
