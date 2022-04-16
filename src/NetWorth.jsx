import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import numeral from "numeral";

const NetWorth = ({ accounts, investmentHorizon }) => {
  console.log("accounts", accounts);

  const calculateAccount = (account) => {
    const yearMap = [];
    let currentValue = account.initialAmount * 100;
    console.log("before", currentValue);
    for (let i = 0; i < investmentHorizon; i++) {
      let endOfYear = account.monthlyDeposit * 100 * 12 + currentValue;
      currentValue = Math.round(
        endOfYear + (account.interest / 100) * endOfYear
      );
      console.log("curent", currentValue);
      yearMap.push(currentValue / 100);
    }
    console.log(yearMap);
    return yearMap;
  };

  accounts.forEach((item) => calculateAccount(item));

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
        {accounts.map((item, index) => (
          <Flex>
            <Text key={index}>{item.name}:&nbsp;</Text>
            <Text fontWeight="bold">
              $
              {numeral(calculateAccount(item)[investmentHorizon - 1]).format(
                "0,0.00"
              )}
            </Text>
          </Flex>
        ))}

        <Text fontWeight="bold">Total: $10,300</Text>
      </Stack>
    </Box>
  );
};

export default NetWorth;
