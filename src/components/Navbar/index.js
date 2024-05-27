"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import "../../styles/global.css";
import { Button, Image } from "@chakra-ui/react";
import Login from "../Login";

export default function Navbar() {
  const { data: session } = useSession();
  const links = [
    {
      name: "dashboard",
      url: "/dashboard",
    },
    {
      name: "team",
      url: "/team",
    },
    {
      name: "workspaces",
      url: "/workspaces",
    },
  ];

  if (session) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.linksContainer}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" className={styles.logo} />
          </Link>
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.url} className={styles.navLink}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="logout-container">
          <Button
            colorScheme="red"
            className={styles.navLink}
            onClick={signOut}
          >
            Logout
          </Button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={styles.navbar}>
        <div className={styles.linksContainer}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" className={styles.logo} />
          </Link>
          <Login />
        </div>
      </nav>
    );
  }
}
