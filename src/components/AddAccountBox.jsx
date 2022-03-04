import { Box, Input, Text, Stack } from "@chakra-ui/react";
import AddAccountButton from "./AddAccountButton";

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
        <Text fontWeight="bold">Account Name</Text>
        <Input placeholder="e.g Investent Account" />
        <AddAccountButton />
      </Stack>
    </Box>
  );
};

export default AddAccountBox;
