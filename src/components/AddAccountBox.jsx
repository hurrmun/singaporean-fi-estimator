import { useState } from "react";
import { Box, Input, Text, Stack, Button, Flex } from "@chakra-ui/react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
// import AccountField from "./AccountField";

const AddAccountBox = () => {
  const [accountName, setAccountName] = useState("");

  const handleChange = (event) => setAccountName(event.target.value);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  console.log("errors", errors);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "accounts",
  });

  const handleAddAcount = () => {
    append({
      name: accountName ? accountName : "New Account",
      initialAmount: "",
      monthlyDeposit: "",
      interest: "",
    });
    setAccountName("");
  };

  return (
    <>
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
          <Input
            placeholder="e.g Investent Account"
            value={accountName}
            onChange={handleChange}
          />
          <Button
            isFullWidth
            colorScheme="teal"
            fontSize={18}
            paddingY={6}
            variant="outline"
            onClick={handleAddAcount}
          >
            + Add New Investent / Savings Account
          </Button>
        </Stack>
      </Box>
      {/* TODO make the Account Field component take in the name from above and changes to it will affect the form state */}
      {fields.map((item, index) => (
        <Box
          key={item.id}
          bg="white"
          border="1px"
          borderColor="gray.300"
          borderRadius="2xl"
          padding="10"
        >
          <Stack spacing={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold" fontSize={20}>
                {fields?.[index]?.name}
              </Text>
              <Button
                type="button"
                onClick={() => remove(index)}
                colorScheme="red"
              >
                Delete
              </Button>
            </Flex>

            <Stack spacing={4}>
              <Controller
                control={control}
                name={`accounts.${index}.initialAmount`}
                render={({ field }) => (
                  <Box>
                    <Text>Initial Amount ($)</Text>
                    <Input
                      {...field}
                      marginTop={2}
                      placeholder="Initial Amount"
                      type="number"
                    />
                  </Box>
                )}
              />
              {errors?.accounts?.[index]?.initialAmount && (
                <Text color="red.500">
                  {errors?.accounts?.[index]?.initialAmount?.message}
                </Text>
              )}
              <Controller
                control={control}
                name={`accounts.${index}.monthlyDeposit`}
                render={({ field }) => (
                  <Box>
                    <Text>Monthly Deposit ($)</Text>
                    <Input
                      {...field}
                      marginTop={2}
                      placeholder="E.g 100"
                      type="number"
                    />
                  </Box>
                )}
              />
              {errors?.accounts?.[index]?.monthlyDeposit && (
                <Text color="red.500">
                  {errors?.accounts?.[index]?.monthlyDeposit?.message}
                </Text>
              )}
              <Controller
                control={control}
                name={`accounts.${index}.interest`}
                render={({ field }) => (
                  <Box>
                    <Text>Projected Annual Interest (%)</Text>
                    <Input
                      {...field}
                      marginTop={2}
                      placeholder="E.g 4"
                      type="number"
                    />
                  </Box>
                )}
              />
              {errors?.accounts?.[index]?.interest && (
                <Text color="red.500">
                  {errors?.accounts?.[index]?.interest?.message}
                </Text>
              )}
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default AddAccountBox;
