import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import SessionWrapper from "../components/SessionWrapper";
import "../styles/global.css";
import storeProvider from './redux/storeProvider'
import store from './redux/store'
import StoreProvider from "./redux/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fox Insights",
  description: "Monitor over prices without problem and with lots of insights!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <StoreProvider>
        <ChakraProvider>
          <SessionWrapper>{children}</SessionWrapper>
        </ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
