import "./App.css";
import {
  Container,
  Stack,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
import PersonalDetails from "./components/PersonalDetails";
import AddAccountBox from "./components/AddAccountBox";
import AccountField from "./components/AccountField";
import AccountsTotal from "./components/AccountsTotal";
import ProjectedCPF from "./components/ProjectedCPF";
import NetWorth from "./NetWorth";

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
              <ProjectedCPF />
              <NetWorth />
            </Stack>
          </GridItem>
          <GridItem colSpan={2}>
            <Stack spacing={6}>
              <AddAccountBox />
              <AccountField />
              <Button isFullWidth colorScheme="teal" fontSize={18} paddingY={6}>
                Calculate Investments
              </Button>
              <AccountsTotal />
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
