import "./App.css";
import {
  Container,
  Stack,
  Text,
  Box,
  Grid,
  GridItem,
  Input,
  Button,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Info from "./components/Info";
import PersonalDetails from "./components/PersonalDetails";
import AddAccountField from "./components/AddAccountField";

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
            <PersonalDetails />
          </GridItem>
          <GridItem colSpan={2}>
            <Stack spacing={6}>
              <AddAccountField />
              <Box
                bg="white"
                border="1px"
                borderColor="gray.300"
                borderRadius="2xl"
                padding="10"
              ></Box>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
