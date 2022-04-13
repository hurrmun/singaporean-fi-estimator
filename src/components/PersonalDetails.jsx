import React from "react";
import {
  Box,
  Text,
  Stack,
  Input,
  Radio,
  RadioGroup,
  Button,
} from "@chakra-ui/react";
import { formSchema } from "./FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useFormContext } from "react-hook-form";

const PersonalDetails = () => {
  // const [value, setValue] = React.useState("yes");

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
            {/* <LabelInputGroup
              name="monthlyIncome"
              label="Monthly income before CPF deduction ($)"
            />
            <LabelInputGroup name="age" label="Age (years)" /> */}
            <Box>
              <Text>Investment Horizon (years)</Text>
              <Controller
                name="investmentHorizon"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    marginTop={2}
                    placeholder="E.g 20"
                    type="number"
                  />
                )}
              />
              {errors?.investmentHorizon && (
                <Text color="red.500">
                  {errors?.investmentHorizon?.message}
                </Text>
              )}
            </Box>
            {/* <Stack spacing={4}>
              <Text>Do you contribute to CPF as an employee</Text>
              <RadioGroup onChange={setValue} value={value} colorScheme="teal">
                <Stack direction="row" spacing={4}>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Stack>
              </RadioGroup>
            </Stack> */}
          </Stack>
        </Stack>
      </Box>
      {/* <Button isFullWidth colorScheme="teal" fontSize={18} paddingY={6}>
        Calculate CPF
      </Button> */}
    </>
  );
};

export default PersonalDetails;
