import {
  Box,
  Stack,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const AccountsTotal = ({ yearMap, investmentHorizon }) => {
  const createLabels = (years) => {
    const yearArr = [];
    for (let i = 0; i <= years; i++) {
      yearArr.push(`Year ${i}`);
    }
    return yearArr;
  };

  const data = {
    labels: createLabels(investmentHorizon),
    datasets: yearMap.map((account) => ({
      label: account.name,
      data: account.data,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    })),
  };

  return (
    <Box
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius="2xl"
      padding="10"
    >
      <Stack>
        <Text fontSize={20} fontWeight="bold">
          Your Projected Earnings
        </Text>
        <Box>
          <Line options={options} data={data} />
        </Box>
      </Stack>
    </Box>
  );
};

export default AccountsTotal;

/* <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Account Name</Th>
              <Th textAlign="right">X Years</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Account 1</Td>
              <Td textAlign="right">$400.20</Td>
            </Tr>
            <Tr>
              <Td>Account 2</Td>
              <Td textAlign="right">$400.20</Td>
            </Tr>
            <Tr>
              <Td>Account 3</Td>
              <Td textAlign="right">$400.20</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Subtotal</Th>
              <Th textAlign="right" fontSize="18">
                $10000.00
              </Th>
            </Tr>
          </Tfoot>
        </Table> */
