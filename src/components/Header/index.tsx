import { Flex, Box, Grid, Image, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === "/";

  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "100px"]}
      px="1rem"
      mx="auto"
      align="center"
      justify="center"
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        h="100%"
        w="100%"
        maxW="1160px"
        mx="auto"
        align="center"
        justify="center"
        alignSelf="start"
      >
        {!isHomePage && (
          <Flex align="center">
            <Link href="/">
              <a>
                <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} />
              </a>
            </Link>
          </Flex>
        )}
        <Image
          src="logo.svg"
          alt="Logo da WorldTrip: uma avião levantando voa deixando uma linha no nome da marca."
          h={["20px", "45.92px"]}
          justifySelf="center"
          gridColumn="2"
          alignSelf="center"
        />
      </Grid>
    </Flex>
  );
}
