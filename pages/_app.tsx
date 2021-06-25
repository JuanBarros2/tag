import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import QueryProvider from "../components/providers/QueryProvider";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </ChakraProvider>
  );
}
