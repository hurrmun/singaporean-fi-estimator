import { Box, Text, Input } from "@chakra-ui/react";

const LabelInputGroup = (props) => {
  return (
    <Box>
      <Text>{props.label}</Text>
      <Input marginTop={2} />
    </Box>
  );
};

export default LabelInputGroup;
