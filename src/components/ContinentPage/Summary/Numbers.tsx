import {
  Flex,
  Heading,
  Text,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";

import { RiInformationLine } from "react-icons/ri";

interface NumbersProps {
  cities100: number;
  languages: number;
  countries: number;
}

export default function Numbers({
  cities100,
  languages,
  countries,
}: NumbersProps) {
  return (
    <Flex justify="space-between" align="center">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {countries}
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="500" color="gray.700">
          países
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {languages}
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="500" color="gray.700">
          línguas
        </Text>
      </Flex>{" "}
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {cities100}
        </Heading>
        <Text
          fontSize={["md", "xl"]}
          fontWeight="500"
          color="gray.700"
          as="div"
        >
          cidades +100
          <Popover variant="responsive">
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in
                eros commodo tempor.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>{" "}
    </Flex>
  );
}
