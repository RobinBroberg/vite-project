import "./App.css";
import {
  Flex,
  Text,
  Button,
  Grid,
  Box,
  Card,
  Container,
  Select,
  TextField,
  TabNav,
  Heading,
} from "@radix-ui/themes";

import { Overview } from "./Overview";

function App() {

  return (
    <Flex direction="column" gap="2">
      <Flex
        gap="5"
        className="border border-gray-700 rounded-lg p-3 items-center"
      >
        <Select.Root defaultValue="alicia">
          <Select.Trigger className="self-center" />
          <Select.Content>
            <TextField.Root placeholder="Search"></TextField.Root>
            <Select.Group>
              <Select.Label>Personal Account</Select.Label>
              <Select.Item value="alicia">Alicia Koch</Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Teams</Select.Label>
              <Select.Item value="acme">Acme</Select.Item>
              <Select.Item value="monsters">Monsters Inc</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
        <TabNav.Root>
          <TabNav.Link href="#" active>
            Overview
          </TabNav.Link>
          <TabNav.Link href="#">Customers</TabNav.Link>
          <TabNav.Link href="#">Products</TabNav.Link>
          <TabNav.Link href="#">Settings</TabNav.Link>
        </TabNav.Root>
        <Box className="ml-auto">
          <TextField.Root placeholder="Search"></TextField.Root>
        </Box>
      </Flex>

      <Container className="border border-gray-700 rounded-lg">
        <Flex className="gap-3">
          <Box maxWidth="240px">
            <Card className="column">
              <Text>Total Revenue</Text>
              <Heading>$45,231.89</Heading>
            </Card>
          </Box>
          <Box maxWidth="240px">
            <Card>test</Card>
          </Box>
          <Box maxWidth="240px">
            <Card>test</Card>
          </Box>
          <Box maxWidth="240px">
            <Card>test</Card>
          </Box>
        </Flex>
        <Box maxWidth="600px">
          <Overview />
        </Box>
      </Container>
    </Flex>
  );
}

export default App;
