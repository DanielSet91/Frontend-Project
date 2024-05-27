import Login from "../components/Login";
import styles from "../styles/index.module.css";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import { Heading, Image } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>
        <Heading as="h1" size="4xl" fontFamily="serif">
          Fox Insights
        </Heading>
        <Image className={styles.img} src="/logo.png" alt="Logo" />
        <Login isButton />
      </main>
    </>
  );
}
