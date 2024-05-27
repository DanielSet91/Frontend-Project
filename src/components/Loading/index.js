import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

export const LoadingSpinner = ({ status }) => {
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
  return null;
};

export default LoadingSpinner;
