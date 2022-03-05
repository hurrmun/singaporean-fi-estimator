import { Box, Stack, Text } from "@chakra-ui/react";

const NetWorth = () => {
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
          Total Net Worth
        </Text>
        <Text>CPF: $300</Text>
        <Text>Retirement Accounts: $10,000</Text>
        <Text fontWeight="bold">Total: $10,300</Text>
      </Stack>
    </Box>
  );
};

export default NetWorth;
