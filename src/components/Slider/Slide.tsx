import { Flex, Text, Heading } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";

interface SlideProps {
  id: string;
  continent: string;
  imageUrl: string;
  summary: string;
}

export default function Slide({
  id,
  continent,
  imageUrl,
  summary,
}: SlideProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url('${imageUrl}')`}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
    >
      <Link href={`/${id}`}>
        <a>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            {continent}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
          >
            {summary}
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
