import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import numeral from "numeral";

const NetWorth = ({ yearMap }) => {
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
        {yearMap.map((item, index) => (
          <Flex key={index}>
            <Text>{item.name}:&nbsp;</Text>
            <Text fontWeight="bold">
              ${numeral(item.data[item.data.length - 1]).format("0,0.00")}
            </Text>
          </Flex>
        ))}

        {/* <Text fontWeight="black" fontSize="lg">
          Total: $
          {numeral(
            yearMap.reduce((accumulator, item) => {
              return accumulator + item.data[item.data.length - 1];
            }, 0)
          ).format("0,0.00")}
        </Text> */}
      </Stack>
    </Box>
  );
};

export default NetWorth;
