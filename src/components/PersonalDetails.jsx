import React from "react";
import {
  Box,
  Text,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

const PersonalDetails = () => {
  const [value, setValue] = React.useState("yes");

  const {
    control,
    formState: { errors },
  } = useFormContext();

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
            Your Details
          </Text>
          <Stack spacing={4}>
            <Box>
              <Text>Investment Horizon (years)</Text>
              <Controller
                name="investmentHorizon"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <NumberInput
                    {...field}
                    marginTop={2}
                    defaultValue={1}
                    max={100}
                    precision={0}
                    errorBorderColor="red.300"
                    isInvalid={Boolean(errors?.investmentHorizon)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                )}
              />
              {errors?.investmentHorizon && (
                <Text color="red.500">
                  {errors?.investmentHorizon?.message}
                </Text>
              )}
            </Box>
            <Stack spacing={4}>
              <Text>CPF Feature Coming Soon..?</Text>
              <RadioGroup onChange={setValue} value={value} colorScheme="teal">
                <Stack direction="row" spacing={4}>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Stack>
              </RadioGroup>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default PersonalDetails;
