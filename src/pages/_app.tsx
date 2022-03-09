import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "../../styles/theme";
import { SidebarContextProvider } from "../context/SidebarContext";
import { makeServer } from "../services/mirage";
import { ReactQueryDevtools } from "react-query/devtools";

if (process.env.NODE_ENV === "development") {
  makeServer();
}
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarContextProvider>
          <Component {...pageProps} />
        </SidebarContextProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
