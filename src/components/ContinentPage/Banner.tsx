import { Flex, Heading } from "@chakra-ui/react";

interface BannerProps {
  continent: string;
  imageUrl: string;
}

export default function Banner({ continent, imageUrl }: BannerProps) {
  return (
    <Flex
      bgImage={`url('${imageUrl}')`}
      w="100%"
      h={["150px", "300px", "500px"]}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        {continent}
      </Heading>
    </Flex>
  );
}
