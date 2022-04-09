import { Box, Text, Input } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

const LabelInputGroup = (props) => {
  const { control } = useForm();
  return (
    <Box>
      <Text>{props.label}</Text>
      <Controller
        name={props.name}
        control={control}
        render={({ field }) => <Input marginTop={2} />}
      />
    </Box>
  );
};

export default LabelInputGroup;
