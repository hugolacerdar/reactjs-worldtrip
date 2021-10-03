import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";

interface CityProps {
  city: string;
  country: string;
  imageUrl: string;
  flagUrl: string;
}

export default function City({ city, country, imageUrl, flagUrl }: CityProps) {
  return (
    <Box overflow="hidden" borderRadius="4px">
      <Image src={imageUrl} alt={`${city} - ${country}`} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
        borderRadius="0 0 4px 4px"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {city}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <Image
          src={flagUrl}
          alt={`Bandeira do país: ${country}`}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
