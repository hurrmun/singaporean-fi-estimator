import React from "react";
import { Box, Text, Stack, Radio, RadioGroup } from "@chakra-ui/react";
import LabelInputGroup from "./LabelInputGroup";

const PersonalDetails = () => {
  const [value, setValue] = React.useState("yes");

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
          <Stack spacing={4}>
            <Text>Do you contribute to CPF as an employee</Text>
            <RadioGroup onChange={setValue} value={value} colorScheme="teal">
              <Stack direction="row" spacing={4}>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Stack>
            </RadioGroup>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PersonalDetails;
