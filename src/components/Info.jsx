import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Info = () => {
  return (
    <Box
      bg="red.400"
      color="white"
      boxShadow="lg"
      borderRadius="2xl"
      padding="10"
    >
      <Text fontSize="md">
        In recognition of this generous gift, the Discovery Hub at SIT’s future
        campus in Punggol will be named the Chua Thian Poh Discovery Hub. In the
        interim, before the Punggol Campus is operational, the Student
        Activities Centre at SIT’s current campus in Dover will be named the
        Chua Thian Poh Student Activities Centre.
      </Text>
    </Box>
  );
};

export default Info;
