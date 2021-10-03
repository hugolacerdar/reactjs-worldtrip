import { Flex, Heading, Container, Text, Image } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "260px", "335px"]}
      bgImage="url('banner.png')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        mx="auto"
        justify={["center", "space-between"]}
        align="center"
        px={["4", "10", "16", "20", "32"]}
      >
        <Container>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            5 continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Container>
        <Image
          src="airplane.svg"
          alt="Avião amarelo e branco voando entre nuvens brancas."
          display={["none", "none", "block"]}
          h={["220px", "220px", "240px", "270px"]}
          ml="8"
          transform={[
            "translateY(77px)",
            "translateY(77px)",
            "translateY(73px)",
            "translateY(58px)",
          ]}
        />
      </Flex>
    </Flex>
  );
}
