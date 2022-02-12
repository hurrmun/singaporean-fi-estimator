import "./App.css";
import { Container, Stack, Heading, Text, Box } from "@chakra-ui/react";

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
        <Stack border="1px" borderRadius="2xl" padding="10">
          <Text>
            In recognition of this generous gift, the Discovery Hub at SIT’s
            future campus in Punggol will be named the Chua Thian Poh Discovery
            Hub. In the interim, before the Punggol Campus is operational, the
            Student Activities Centre at SIT’s current campus in Dover will be
            named the Chua Thian Poh Student Activities Centre.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
