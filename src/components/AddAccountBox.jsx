import { useState } from "react";
import { Box, Input, Text, Stack, Button } from "@chakra-ui/react";
import {
  useForm,
  useFormContext,
  useFieldArray,
  Controller,
} from "react-hook-form";
import AccountField from "./AccountField";

const AddAccountBox = () => {
  const [accountName, setAccountName] = useState("");

  const handleChange = (event) => setAccountName(event.target.value);

  const { register, control } = useFormContext({
    defaultValues: {
      account: [
        {
          name: "New Account",
          initialAmount: 0,
          monthlyDeposit: 0,
          interest: 0,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "account",
  });

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
            onClick={() =>
              append({
                name: accountName,
                initialAmount: 0,
                monthlyDeposit: 0,
                interest: 0,
              })
            }
          >
            + Add New Investent / Savings Account
          </Button>
        </Stack>
      </Box>
      {/* TODO make the Account Field component take in the name from above and changes to it will affect the form state */}
      {fields.map((item, index) => (
        <AccountField key={item.id} />
      ))}
    </>
  );
};

export default AddAccountBox;
