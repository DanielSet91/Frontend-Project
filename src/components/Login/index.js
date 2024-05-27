"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button, Link, Spinner } from "@chakra-ui/react";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

export default function Login({ isButton }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const signInRedirect = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  if (status === "loading") {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }
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
          Logout
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
