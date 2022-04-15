import "./App.css";
import {
  Container,
  Stack,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "./components/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "./components/Header";
import Info from "./components/Info";
import PersonalDetails from "./components/PersonalDetails";
import AddAccountBox from "./components/AddAccountBox";
import AccountField from "./components/AccountField";
import AccountsTotal from "./components/AccountsTotal";
// import ProjectedCPF from "./components/ProjectedCPF";
import NetWorth from "./NetWorth";

function App() {
  const methods = useForm({
    defaultValues: {
      investmentHorizon: "",
      accounts: [],
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };

  const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <Box textAlign="center" bg="gray.50" minH="100vh" color="gray.900">
      <Header />
      <Container maxW="container.xl">
        <Info />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={6}
              marginTop={10}
              textAlign="left"
            >
              <GridItem>
                <Stack spacing={6}>
                  <PersonalDetails />
                  {/* <ProjectedCPF /> */}
                  <NetWorth />
                </Stack>
              </GridItem>
              <GridItem colSpan={2}>
                <Stack spacing={6}>
                  <AddAccountBox />
                  <Button
                    isFullWidth
                    colorScheme="teal"
                    fontSize={18}
                    paddingY={6}
                    type="submit"
                  >
                    Calculate Investments
                  </Button>
                  <AccountsTotal />
                </Stack>
              </GridItem>
            </Grid>
          </form>
        </FormProvider>
      </Container>
    </Box>
  );
}

export default App;
