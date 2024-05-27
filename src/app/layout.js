import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import SessionWrapper from "../components/SessionWrapper";
import { Provider } from "react-redux";
import store from "../lib/redux/store.js";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fox Insights",
  description: "Monitor over prices without problem and with lots of insights!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <ChakraProvider>
          <SessionWrapper>
            {/* <Provider store={store}> */}
            {children}
            {/* </Provider> */}
          </SessionWrapper>
        </ChakraProvider>
      </body>
    </html>
  );
}
