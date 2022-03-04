import React from "react";
import { Box, Text, Stack, Input } from "@chakra-ui/react";
import LabelInputGroup from "./LabelInputGroup";

const PersonalDetails = () => {
  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius="2xl"
      padding="10"
    >
      <Stack spacing={4}>
        <Text fontWeight="bold" fontSize={20}>
          Your Details
        </Text>
        <Stack spacing={4}>
          <LabelInputGroup label="Monthly income before CPF deduction ($)" />
          <LabelInputGroup label="Age (years)" />
          <LabelInputGroup label="Investment Horizon (years)" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default PersonalDetails;
