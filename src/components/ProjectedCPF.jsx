import { Box, Text, Stack } from "@chakra-ui/react";

const ProjectedCPF = () => {
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
          CPF in X years
        </Text>
        <Text>OA: $100</Text>
        <Text>SA: $100</Text>
        <Text>MA: $100</Text>
        <Text fontWeight="bold">Total: $300</Text>
      </Stack>
    </Box>
  );
};

export default ProjectedCPF;
