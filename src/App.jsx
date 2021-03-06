import {
  useMediaQuery,
  Container,
  Stack,
  Box,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { formSchema } from "./FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "./components/Header";
import Info from "./components/Info";
import PersonalDetails from "./components/PersonalDetails";
import AddAccountBox from "./components/AddAccountBox";
import AccountsTotal from "./components/AccountsTotal";
// import ProjectedCPF from "./components/ProjectedCPF";
import NetWorth from "./NetWorth";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [investmentHorizon, setInvestmentHorizon] = useState(0);
  const [yearMap, setYearMap] = useState([]);

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  useEffect(() => {
    const calculateAccount = (account) => {
      const yearMap = [account.initialAmount];
      let currentValue = account.initialAmount * 100;
      console.log("before", currentValue);
      for (let i = 0; i < investmentHorizon; i++) {
        currentValue = Math.round(
          currentValue + (account.interest / 100) * currentValue
        );
        let yearlyAddition = account.monthlyDeposit * 100 * 12;
        currentValue += yearlyAddition;
        // console.log("curent", currentValue);
        yearMap.push(currentValue / 100);
      }
      return yearMap;
    };

    const mappedAccounts = accounts.map((account) => ({
      name: account.name,
      data: calculateAccount(account),
    }));

    const calculateTotal = (mappedAcc) => {
      let total = [];
      for (let i = 0; i < mappedAcc.length; i++) {
        for (let j = 0; j < mappedAcc[i].data.length; j++) {
          total[j] = total[j] + mappedAcc[i].data[j] || mappedAcc[i].data[j];
        }
      }
      return total;
    };

    mappedAccounts.push({
      name: "Total",
      data: calculateTotal(mappedAccounts),
    });

    setYearMap(mappedAccounts);
  }, [accounts, setYearMap, investmentHorizon]);

  useEffect(() => {
    scrollToTop();
  }, [accounts]);

  const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <Box textAlign="center" bg="gray.50" minH="100vh" color="gray.900">
      <Header />
      <Container maxW="container.xl" paddingBottom={50}>
        <Info />
        {yearMap.length > 1 && (
          <AccountsTotal
            yearMap={yearMap}
            investmentHorizon={investmentHorizon}
          />
        )}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
            <Grid
              templateColumns={
                isLargerThan768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"
              }
              gap={6}
              marginTop={10}
              textAlign="left"
            >
              <GridItem>
                <Stack
                  spacing={6}
                  position={isLargerThan768 && "sticky"}
                  top={10}
                >
                  <PersonalDetails />
                  {/* <ProjectedCPF /> */}
                  <NetWorth yearMap={yearMap} />
                </Stack>
              </GridItem>
              <GridItem colSpan={isLargerThan768 ? 2 : 1}>
                <Stack spacing={6}>
                  <AddAccountBox />
                  <Button
                    isFullWidth
                    colorScheme="teal"
                    fontSize={18}
                    paddingY={6}
                    marginBottom={10}
                    type="submit"
                  >
                    Calculate Investments
                  </Button>
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
