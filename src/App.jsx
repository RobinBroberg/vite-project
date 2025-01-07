import "./App.css";
import {
  Flex,
  Text,
  Box,
  Card,
  Container,
  TextField,
  TabNav,
  Heading,
  Button,
  SegmentedControl,
} from "@radix-ui/themes";

import { Overview } from "./components/Overview";
import image01 from "./assets/01.png";
import CustomSelect from "./components/Select";

function App() {
  return (
    <Box className="max-w-[80%] mx-auto">
      <Flex
        gap="5"
        className="border border-gray-300 rounded-t-lg p-3 items-center"
      >
        <CustomSelect />
        <TabNav.Root color="gray" className="font-medium">
          <TabNav.Link href="#" active>
            Overview
          </TabNav.Link>
          <TabNav.Link href="#">Customers</TabNav.Link>
          <TabNav.Link href="#">Products</TabNav.Link>
          <TabNav.Link href="#">Settings</TabNav.Link>
        </TabNav.Root>
        <Box className="ml-auto">
          <TextField.Root
            placeholder="Search..."
            className="w-56"
          ></TextField.Root>
        </Box>
        <Box>
          <img src={image01} className="w-6 h-6" />
        </Box>
      </Flex>

      <Flex className="border border-gray-300 border-t-0 rounded-b-lg flex-col p-6">
        <Flex className="mt-8 items-center">
          <Heading size="8">Dashboard</Heading>

          <Box className="ml-auto">
            <Button color="gray" radius="large" variant="solid" highContrast>
              Download
            </Button>
          </Box>
        </Flex>

        <Flex className="mt-5">
          <Box className="w-full">
            <SegmentedControl.Root
              defaultValue="overview"
              radius="large"
              className="p-1 font-medium"
            >
              <SegmentedControl.Item value="overview" className="px-4 py-2">
                Overview
              </SegmentedControl.Item>
              <SegmentedControl.Item value="analytics" className="px-4 py-2">
                Analytics
              </SegmentedControl.Item>
              <SegmentedControl.Item value="reports" className="px-4 py-2">
                Reports
              </SegmentedControl.Item>
              <SegmentedControl.Item
                value="notifications"
                className="px-4 py-2"
              >
                Notifications
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </Box>
        </Flex>

        <Flex className="gap-4 flex-col md:flex-row">
          <Box className="w-auto md:w-[25%] flex">
            <Card size="3" className="my-5 shadow">
              <Flex>
                <Text className="text-sm font-medium">Total Revenue</Text>
                <Text className="ml-auto text-sm">$</Text>
              </Flex>
              <Heading className="text-2xl font-bold">$45,231.89</Heading>
              <Text className="text-xs text-gray-500">
                +20.1% from last month
              </Text>
            </Card>
          </Box>

          <Box className="w-auto md:w-[25%] flex">
            <Card size="3" className="my-5 shadow">
              <Flex>
                <Text className="text-sm font-medium">Subscriptions</Text>
                <Text className="ml-auto text-sm">👥</Text>
              </Flex>
              <Heading className="text-2xl font-bold">+2,350</Heading>
              <Text className="text-xs text-gray-500">
                +180.1% from last month
              </Text>
            </Card>
          </Box>

          <Box className="w-auto md:w-[25%] flex">
            <Card size="3" className="my-5 shadow">
              <Flex>
                <Text className="text-sm font-medium">Sales</Text>
                <Text className="ml-auto text-sm">📄</Text>
              </Flex>
              <Heading className="text-2xl font-bold">+12,234</Heading>
              <Text className="text-xs text-gray-500">
                +19% from last month
              </Text>
            </Card>
          </Box>

          <Box className="w-auto md:w-[25%] flex">
            <Card size="3" className="my-5 shadow">
              <Flex>
                <Text className="text-sm font-medium">Active Now</Text>
                <Text className="ml-auto text-sm">📈</Text>
              </Flex>
              <Heading className="text-2xl font-bold">+573</Heading>
              <Text className="text-xs text-gray-500">
                +201 since last hour
              </Text>
            </Card>
          </Box>
        </Flex>
        <Flex className="gap-3 flex-col lg:flex-row">
          <Container className="border border-gray-300 rounded-xl max-w-[800px] pt-2 mb-1">
            <Box>
              <Heading size="4" className="text-left mb-2 ml-6">
                Overview
              </Heading>
              <Overview />
            </Box>
          </Container>
          <Container className="border border-gray-300 rounded-xl max-w-full p-4 mb-1">
            <Box>
              <Heading size="4" className="mb-1">
                Recent Sales
              </Heading>
              <Text className="text-gray-500 text-sm">
                You made 265 sales this month.
              </Text>
            </Box>

            <Flex direction="column" gap="4" className="mt-4">
              <Flex align="center" justify="between" className="gap-4">
                <Flex align="center" className="gap-3">
                  <img
                    src={image01}
                    alt="Olivia Martin's avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <Flex className="flex-col">
                    <Text className="font-medium">Olivia Martin</Text>
                    <Text className="text-gray-500 text-sm">
                      olivia.martin@email.com
                    </Text>
                  </Flex>
                </Flex>
                <Text className=" font-medium">+$1,999.00</Text>
              </Flex>

              <Flex align="center" justify="between" className="gap-4">
                <Flex align="center" className="gap-3">
                  <img
                    src={image01}
                    alt="Jackson Lee's avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <Flex className="flex-col">
                    <Text className="font-medium">Jackson Lee</Text>
                    <Text className="text-gray-500 text-sm">
                      jackson.lee@email.com
                    </Text>
                  </Flex>
                </Flex>
                <Text className=" font-medium">+$39.00</Text>
              </Flex>

              <Flex align="center" justify="between" className="gap-4">
                <Flex align="center" className="gap-3">
                  <img
                    src={image01}
                    alt="Isabella Nguyen's avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <Flex className="flex-col">
                    <Text className="font-medium">Isabella Nguyen</Text>
                    <Text className="text-gray-500 text-sm">
                      isabella.nguyen@email.com
                    </Text>
                  </Flex>
                </Flex>
                <Text className=" font-medium">+$299.00</Text>
              </Flex>

              <Flex align="center" justify="between" className="gap-4">
                <Flex align="center" className="gap-3">
                  <img
                    src={image01}
                    alt="William Kim's avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <Flex className="flex-col">
                    <Text className="font-medium">William Kim</Text>
                    <Text className="text-gray-500 text-sm">
                      will@email.com
                    </Text>
                  </Flex>
                </Flex>
                <Text className=" font-medium">+$99.00</Text>
              </Flex>

              <Flex align="center" justify="between" className="gap-4">
                <Flex align="center" className="gap-3">
                  <img
                    src={image01}
                    alt="Sofia Davis's avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <Flex className="flex-col">
                    <Text className="font-medium">Sofia Davis</Text>
                    <Text className="text-gray-500 text-sm">
                      sofia.davis@email.com
                    </Text>
                  </Flex>
                </Flex>
                <Text className=" font-medium">+$39.00</Text>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
