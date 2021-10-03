import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react";

interface CategoryProps {
  icon: {
    fileName: string;
    alt: string;
  };
  title: string;
}

export default function Category({ icon, title }: CategoryProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center">
      {isMobile ? (
        <Image
          src={`/icons/${icon.fileName}.svg`}
          alt={icon.alt}
          h="85px"
          mb="6"
        />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" fontSize={["md", "xl", "2xl"]}>
        {title}
      </Text>
    </Flex>
  );
}
