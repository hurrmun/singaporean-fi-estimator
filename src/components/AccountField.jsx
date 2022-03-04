import { Box, Stack, Flex, Text, Button, Input } from "@chakra-ui/react";

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
          <Box>
            <Text>Initial Amount ($)</Text>
            <Input marginTop={2} />
          </Box>
          <Box>
            <Text>Monthly Deposit ($)</Text>
            <Input marginTop={2} />
          </Box>
          <Box>
            <Text>Annual Interest (%)</Text>
            <Input marginTop={2} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AccountField;
