import "./App.css";
import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App() {
  return (
    <Box textAlign="center" bg="gray.50" minH="100vh" color="gray.900">
      <Box paddingY="20" bg="red.500" color="white" marginBottom="10">
        <Heading>The Singaporean FI Estimator</Heading>
        <Text fontSize="xl" marginTop="2">
          A financial instrument for planning out your FI roadmap
        </Text>
      </Box>
      <Container maxW="container.xl">
        <Box bg="white" boxShadow="lg" borderRadius="2xl" padding="10">
          <Text>
            In recognition of this generous gift, the Discovery Hub at SIT’s
            future campus in Punggol will be named the Chua Thian Poh Discovery
            Hub. In the interim, before the Punggol Campus is operational, the
            Student Activities Centre at SIT’s current campus in Dover will be
            named the Chua Thian Poh Student Activities Centre.
          </Text>
        </Box>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          marginTop={6}
          textAlign="left"
        >
          <GridItem>
            <Box
              bg="white"
              border="1px"
              borderColor="gray.300"
              borderRadius="2xl"
              padding="10"
            >
              <Text fontSize="md" fontWeight="bold">
                Your Details
              </Text>
              <Stack marginTop={4}>
                <Text>Monthly income (before CPF deduction)</Text>
                <Input />
              </Stack>
              <Stack marginTop={4}>
                <Text>Age</Text>
                <Input />
              </Stack>
              <Stack marginTop={4}>
                <Text>Deduct Tax</Text>
                <RadioGroup
                  name="deductTax"
                  onChange={() => console.log("change")}
                >
                  <Stack direction="row" spacing={4}>
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no" defaultChecked>
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box
              bg="white"
              border="1px"
              borderColor="gray.300"
              borderRadius="2xl"
              padding="10"
            ></Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
