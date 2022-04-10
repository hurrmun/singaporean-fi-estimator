import { Box, Text, Input } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

const LabelInputGroup = (props) => {
  const { control } = useFormContext();

  return (
    <Box>
      <Text>{props.label}</Text>
      <Controller
        name={props.name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <Input
            marginTop={2}
            placeholder={props.placeholder}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            // inputRef={ref}
            // {...props}
          />
        )}
      />
    </Box>
  );
};

export default LabelInputGroup;
