import { Box, Stack, Text } from "@chakra-ui/react";
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
      text: "Your Accounts",
    },
  },
};

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const hexcode = "#" + randomColor;
  return hexcode;
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
    datasets: yearMap.map((account) => {
      const randomColor = generateRandomColor();
      return {
        label: account.name,
        data: account.data,
        borderColor: randomColor,
        backgroundColor: randomColor,
      };
    }),
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
