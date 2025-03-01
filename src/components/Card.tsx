import { Box } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <>
      <Box minHeight="100vh" padding="25px">
        {children}
      </Box>
    </>
  );
};
