import { ChakraProvider } from "@chakra-ui/react";
import Login from "../components/Login";
import styles from "../styles/index.module.css";
import Navbar from "../components/Navbar";
import '../styles/global.css'

export default function Page() {
  return (
    <>
        <Navbar />
        <main className={styles.main}>
          <img className={styles.img} src="/logo.png" alt="Logo" />
          <Login />
        </main>
    </>
  );
}
