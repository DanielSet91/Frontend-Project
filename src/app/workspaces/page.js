import { Heading } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import styles from "./workspaces.module.css";

export default function Workspaces() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Heading as="h3" className={styles.construction}>
          Under Construction
        </Heading>
      </div>
    </>
  );
}
