import { Box, Input, Text, Stack, Button } from "@chakra-ui/react";

const AddAccountBox = () => {
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
          Account Name
        </Text>
        <Input placeholder="e.g Investent Account" />
        <Button
          isFullWidth
          colorScheme="teal"
          fontSize={18}
          paddingY={6}
          variant="outline"
          type="submit"
        >
          + Add New Investent / Savings Account
        </Button>
      </Stack>
    </Box>
  );
};

export default AddAccountBox;
