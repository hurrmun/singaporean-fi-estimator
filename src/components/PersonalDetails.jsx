import React from "react";
import { Box, Text, Stack, Input } from "@chakra-ui/react";

const PersonalDetails = () => {
  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius="2xl"
      padding="10"
    >
      <Text fontSize="md" fontWeight="bold">
        Your Details
      </Text>
      <Stack marginTop={4}>
        <Text>Monthly income (before CPF deduction)</Text>
        <Input />
      </Stack>
      <Stack marginTop={4}>
        <Text>Age</Text>
        <Input />
      </Stack>
      <Stack marginTop={4}>
        <Text>Expected Monthly Expenditure after Retirement</Text>
        <Input />
      </Stack>
    </Box>
  );
};

export default PersonalDetails;
