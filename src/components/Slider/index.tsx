import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../services/api";
import Slide from "./Slide";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

interface ContinentSummary {
  id: string;
  continent: string;
  imageUrl: string;
  summary: string;
}

interface SliderProps {
  continents: ContinentSummary[];
}

export default function Slider({ continents }: SliderProps) {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ height: "100%", width: "100%", flex: "1" }}
      >
        {continents &&
          continents.map((data) => (
            <SwiperSlide key={data.id}>
              <Slide
                id={data.id}
                continent={data.continent}
                imageUrl={data.imageUrl}
                summary={data.summary}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Flex>
  );
}
