import { Inter } from "next/font/google";
import SessionWrapper from "../components/SessionWrapper";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Monitoring App",
  description: "Monitor over prices without problem and with lots of insights!",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
          <body className={inter.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
