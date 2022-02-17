import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box paddingY="20" bg="red.500" color="white" marginBottom="10">
      <Heading>The Singaporean FI Estimator</Heading>
      <Text fontSize="xl" marginTop="2">
        A financial instrument for planning out your FI roadmap
      </Text>
    </Box>
  );
};

export default Header;
