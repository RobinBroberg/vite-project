import { Flex, Select, TextField } from "@radix-ui/themes";

import image02 from "../assets/personal.png";

export default function CustomSelect() {
  return (
    <Select.Root defaultValue="alicia">
      <Select.Trigger />
      <Select.Content className="h-[350px]">
        <TextField.Root placeholder="Search"></TextField.Root>
        <Select.Group>
          <Select.Label>Personal Account</Select.Label>
          <Select.Item value="alicia" className="flex items-center gap-2">
            <Flex as="span" align="center" gap="2">
              <img
                src={image02}
                alt="alicia"
                className="object-cover grayscale w-5 h-5 rounded-full"
              />
              Alicia Koch
            </Flex>
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Teams</Select.Label>
          <Select.Item value="acme" className="flex items-center gap-2">
            <Flex as="span" align="center" gap="2">
              <img
                src={image02}
                alt="acme"
                className="object-cover filter grayscale-[80%] w-5 h-5 rounded-full"
              />
              Acme
            </Flex>
          </Select.Item>
          <Select.Item value="monsters" className="flex items-center gap-2">
            <Flex as="span" align="center" gap="2">
              <img
                src={image02}
                alt="acme"
                className="object-cover filter grayscale-[50%] w-5 h-5 rounded-full"
              />
              Monsters Inc
            </Flex>
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Item className="font-bold">+ Create Team</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
