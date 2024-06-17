"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import "../../styles/global.css";
import { Button, Image } from "@chakra-ui/react";
import Login from "../Login";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, login, logout } from "@/src/app/redux/features/authSlice";
import { useEffect, useState } from "react";

// return (
//   <nav className={styles.navbar}>
//     <div className={styles.linksContainer}>
//       <Link href="/">
//         <Image src="/logo.png" alt="Logo" className={styles.logo} />
//       </Link>
//       <Login />
//     </div>
//   </nav>
// );

export default function Navbar() {
  const { data: session } = useSession();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false)

  useEffect(() =>{
    setMounted(true);
  }, [])
  
  useEffect(() => {
    if (session) {
      dispatch(login(session.user));
    } else {
      dispatch(logout());
    }
  }, [session, dispatch]);

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

  if (!mounted) {
    return null; // Render nothing until the client has mounted
  }

  if (isAuthenticated) {
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
