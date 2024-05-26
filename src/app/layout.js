import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import SessionWrapper from "../components/SessionWrapper";
import '../styles/global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Monitoring App",
  description: "Monitor over prices without problem and with lots of insights!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata can be added here if needed */}
      </head>
      <body className={inter.className}>
        <ChakraProvider>
          <SessionWrapper>
            {children}
          </SessionWrapper>
        </ChakraProvider>
      </body>
    </html>
  );
}
