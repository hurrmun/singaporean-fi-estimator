import { Box, Text, Input, Button } from "@chakra-ui/react";

const AddAccountField = () => {
  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius="2xl"
      padding="10"
    >
      <Text>Add new Investment Vehicle</Text>
      <Input marginTop={3} placeholder="name of account" />
      <Button isFullWidth marginTop={3} colorScheme="teal">
        Add
      </Button>
    </Box>
  );
};

export default AddAccountField;
