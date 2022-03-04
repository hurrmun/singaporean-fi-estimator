import {
  Box,
  Stack,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";

const AccountsTotal = () => {
  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius="2xl"
      padding="10"
    >
      <Stack>
        <Text fontSize={20} fontWeight="bold">
          Your Projected Earnings
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Account Name</Th>
              <Th textAlign="right">X Years</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Account 1</Td>
              <Td textAlign="right">$400.20</Td>
            </Tr>
            <Tr>
              <Td>Account 2</Td>
              <Td textAlign="right">$400.20</Td>
            </Tr>
            <Tr>
              <Td>Account 3</Td>
              <Td textAlign="right">$400.20</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Subtotal</Th>
              <Th textAlign="right" fontSize="18">
                $10000.00
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </Stack>
    </Box>
  );
};

export default AccountsTotal;
