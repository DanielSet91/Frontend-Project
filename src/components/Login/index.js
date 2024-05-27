"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button, Link } from "@chakra-ui/react";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login({ isButton }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const signInRedirect = () => {
    signIn("google");
    router.push("/dashboard");
  };

  if (session) {
    return (
      <div className={styles.divWelcome}>
        <p className={styles.welcome}>Welcome, {session.user.name}</p>
        <Button
          colorScheme="purple"
          size="lg"
          variant="solid"
          onClick={() => signOut()}
          className={styles.signOut}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  if (isButton) {
    return (
      <div>
        <Button
          colorScheme="purple"
          size="lg"
          variant="solid"
          onClick={() => signInRedirect()}
          className={styles.signOut}
        >
          Sign in with Google
        </Button>
      </div>
    );
  } else {
    return (
      <Link onClick={signInRedirect} className={styles.signInLink}>
        Login
      </Link>
    );
  }
}
