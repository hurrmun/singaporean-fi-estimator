import "./App.css";
import { Container, Stack, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
import PersonalDetails from "./components/PersonalDetails";
import AddAccountBox from "./components/AddAccountBox";
import AccountField from "./components/AccountField";
import AccountsTotal from "./components/AccountsTotal";

function App() {
  return (
    <Box textAlign="center" bg="gray.50" minH="100vh" color="gray.900">
      <Header />
      <Container maxW="container.xl">
        <Info />
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          marginTop={10}
          textAlign="left"
        >
          <GridItem>
            <Stack spacing={6}>
              <PersonalDetails />
              <Box
                bg="white"
                border="1px"
                borderColor="gray.300"
                borderRadius="2xl"
                padding="10"
              >
                <Stack spacing={4}>
                  <Text fontWeight="bold" fontSize={20}>
                    CPF in X years
                  </Text>
                  <Text>OA: $100</Text>
                  <Text>SA: $100</Text>
                  <Text>MA: $100</Text>
                  <Text fontWeight="bold">Total: $300</Text>
                </Stack>
              </Box>
            </Stack>
          </GridItem>
          <GridItem colSpan={2}>
            <Stack spacing={6}>
              <AddAccountBox />
              <AccountField />
              <AccountsTotal />
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
