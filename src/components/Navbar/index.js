"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import '../../styles/global.css'
import { Button } from "@chakra-ui/react";

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
          <a href="/">
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </a>
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.url} className={styles.navLink}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="logout-container">
          <Button colorScheme="blue" className={styles.navLink} onClick={signOut}>
            Logout
          </Button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={styles.navbar}>
        <div className={styles.linksContainer}>
        <a href="/">
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </a>
          <Link href="/login" className={styles.navLink}>
            Login
          </Link>
      </div>
      </nav>
    );
  }
}
