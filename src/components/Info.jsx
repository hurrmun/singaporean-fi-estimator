import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Info = () => {
  return (
    <Box
      bg="red.400"
      color="white"
      boxShadow="lg"
      borderRadius="2xl"
      padding={10}
      marginBottom={10}
    >
      <Text fontSize="18">
        As Singaporeans start to embark on their financial journey, it could
        help if there was some sort of roadmap to visualise the potential
        earning in X years. Having a visual representation of data catering to a
        typical Singaporeans' retirement vehicles can greatly aid in
        understanding where your money goes to, as well as assist in
        understanding delayed gratification when trying to save for retirement.
      </Text>
    </Box>
  );
};

export default Info;
