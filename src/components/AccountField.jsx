import { Box, Stack, Flex, Text, Button, Input } from "@chakra-ui/react";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import LabelInputGroup from "./LabelInputGroup";

const AccountField = ({ index }) => {
  const { control } = useFormContext();

  const { remove } = useFieldArray({
    control,
    name: "account",
  });

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
          <Button onClick={() => remove(index)} colorScheme="red">
            Delete
          </Button>
        </Flex>

        <Stack spacing={4}>
          <Controller
            control={control}
            name={`account.${index}.initialAmount`}
            render={({ field }) => (
              <Box>
                <Text>Initial Amount ($)</Text>
                <Input {...field} marginTop={2} placeholder="Initial Amount" />
              </Box>
            )}
          />
          {/* <LabelInputGroup name="initialAmount" label="Initial Amount ($)" />
          <LabelInputGroup name="monthlyDeposit" label="Monthly Deposit ($)" />
          <LabelInputGroup
            name="annualInterest"
            label="Projected Annual Interest (%)"
          /> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AccountField;
