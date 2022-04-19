import {
  Container,
  Stack,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "./FormValidation";
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
  const [accounts, setAccounts] = useState([]);
  const [investmentHorizon, setInvestmentHorizon] = useState(0);
  const [yearMap, setYearMap] = useState([]);

  const methods = useForm({
    defaultValues: {
      investmentHorizon: "",
      accounts: [],
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    setAccounts(data.accounts);
    setInvestmentHorizon(data.investmentHorizon);
    console.log("data", data);
  };

  useEffect(() => {
    const calculateAccount = (account) => {
      const yearMap = [account.initialAmount];
      let currentValue = account.initialAmount * 100;
      console.log("before", currentValue);
      for (let i = 0; i < investmentHorizon; i++) {
        let endOfYear = account.monthlyDeposit * 100 * 12 + currentValue;
        currentValue = Math.round(
          endOfYear + (account.interest / 100) * endOfYear
        );
        console.log("curent", currentValue);
        yearMap.push(currentValue / 100);
      }
      console.log(yearMap);
      return yearMap;
    };

    const mappedAccounts = accounts.map((account) => ({
      name: account.name,
      data: calculateAccount(account),
    }));
    setYearMap(mappedAccounts);
  }, [accounts, setYearMap, investmentHorizon]);

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
                  <NetWorth yearMap={yearMap} />
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
                  {yearMap.length > 0 && (
                    <AccountsTotal
                      yearMap={yearMap}
                      investmentHorizon={investmentHorizon}
                    />
                  )}
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
