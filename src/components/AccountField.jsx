import { Box, Stack, Flex, Text, Button } from "@chakra-ui/react";
import LabelInputGroup from "./LabelInputGroup";

const AccountField = () => {
  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius="2xl"
      padding="10"
    >
      <Stack spacing={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize={20}>
            Investment Account
          </Text>
          <Button colorScheme="red">Delete</Button>
        </Flex>

        <Stack spacing={4}>
          <LabelInputGroup name="initialAmount" label="Initial Amount ($)" />
          <LabelInputGroup name="monthlyDeposit" label="Monthly Deposit ($)" />
          <LabelInputGroup
            name="annualInterest"
            label="Projected Annual Interest (%)"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AccountField;
