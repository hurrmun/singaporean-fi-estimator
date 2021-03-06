import { useState } from "react";
import {
  useMediaQuery,
  Box,
  Input,
  Text,
  Stack,
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";

import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import { FaTrash, FaPlus } from "react-icons/fa";
// import AccountField from "./AccountField";

const AddAccountBox = () => {
  const [accountName, setAccountName] = useState("");

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handleChange = (event) => setAccountName(event.target.value);

  const scrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 1000,
      smooth: true,
    });
  };

  const {
    control,
    formState: { errors },
  } = useFormContext();

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
            New Account Name
          </Text>
          <Input
            placeholder="e.g Investent Account"
            value={accountName}
            onChange={handleChange}
          />
          <Button
            isFullWidth
            colorScheme="green"
            fontSize={18}
            paddingY={6}
            variant="outline"
            style={
              isLargerThan768
                ? {}
                : {
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    padding: "2em",
                  }
            }
            onClick={() => {
              handleAddAcount();
              scrollToBottom();
            }}
          >
            <HStack>
              <FaPlus />
              <Text>Add New Investent / Savings Account</Text>
            </HStack>
          </Button>
          {errors?.accounts && (
            <Text color="red.500">{errors?.accounts?.message}</Text>
          )}
        </Stack>
      </Box>
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
              <IconButton
                colorScheme="red"
                onClick={() => remove(index)}
                aria-label="Delete Account"
                type="button"
                icon={<FaTrash />}
                variant="outline"
              />
            </Flex>

            <Stack spacing={4}>
              <Box>
                <Text>Initial Amount ($)</Text>
                <Controller
                  control={control}
                  name={`accounts.${index}.initialAmount`}
                  render={({ field }) => (
                    <NumberInput
                      {...field}
                      marginTop={2}
                      defaultValue={0}
                      precision={2}
                      step={100}
                      errorBorderColor="red.300"
                      isInvalid={Boolean(
                        errors?.accounts?.[index]?.initialAmount
                      )}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  )}
                />
                {errors?.accounts?.[index]?.initialAmount && (
                  <Text color="red.500">
                    {errors?.accounts?.[index]?.initialAmount?.message}
                  </Text>
                )}
              </Box>
              <Box>
                <Text>Monthly Deposit ($)</Text>
                <Controller
                  control={control}
                  name={`accounts.${index}.monthlyDeposit`}
                  render={({ field }) => (
                    <NumberInput
                      {...field}
                      marginTop={2}
                      defaultValue={0}
                      precision={2}
                      step={100}
                      errorBorderColor="red.300"
                      isInvalid={Boolean(
                        errors?.accounts?.[index]?.monthlyDeposit
                      )}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  )}
                />
                {errors?.accounts?.[index]?.monthlyDeposit && (
                  <Text color="red.500">
                    {errors?.accounts?.[index]?.monthlyDeposit?.message}
                  </Text>
                )}
              </Box>
              <Box>
                <Text>Projected Annual Interest (%)</Text>
                <Controller
                  control={control}
                  name={`accounts.${index}.interest`}
                  render={({ field }) => (
                    <NumberInput
                      {...field}
                      marginTop={2}
                      defaultValue={0}
                      precision={2}
                      step={1}
                      errorBorderColor="red.300"
                      isInvalid={Boolean(errors?.accounts?.[index]?.interest)}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  )}
                />
                {errors?.accounts?.[index]?.interest && (
                  <Text color="red.500">
                    {errors?.accounts?.[index]?.interest?.message}
                  </Text>
                )}
              </Box>
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  );
};

export default AddAccountBox;
