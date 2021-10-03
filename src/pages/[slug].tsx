import { Flex, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Banner from "../components/ContinentPage/Banner";
import City from "../components/ContinentPage/City";
import Summary from "../components/ContinentPage/Summary";
import Header from "../components/Header";

interface City {
  name: string;
  country: string;
  imageUrl: string;
  flagUrl: string;
}

interface ContinentData {
  continent: string;
  imageUrl: string;
  extendedSummary: string;
  countriesNum: number;
  languagesNum: number;
  cities100: City[];
}

interface ContinentProps {
  data: ContinentData;
}

export default function Continent({ data }: ContinentProps) {
  const {
    imageUrl,
    continent,
    extendedSummary,
    countriesNum,
    languagesNum,
    cities100,
  } = data;
  return (
    <>
      <Header />
      <Banner imageUrl={imageUrl} continent={continent} />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Summary
          mainText={extendedSummary}
          languages={languagesNum}
          cities100={cities100.length}
          countries={countriesNum}
        />
        <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
          Cidades +100
        </Heading>
        <Grid
          templateColumns={[
            "1fr",
            "1fr 1fr",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={["20px", "45px"]}
          align="center"
          justify="center"
          px={["30px", "0"]}
        >
          {data.cities100.map((city) => (
            <City
              key={city.name}
              city={city.name}
              country={city.country}
              imageUrl={city.imageUrl}
              flagUrl={city.flagUrl}
            />
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get("http://localhost:3334/continents/");

  const continents = response.data as any[];

  const paths = continents.map((continent) => {
    return {
      params: {
        slug: continent.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const response = await axios.get(`http://localhost:3334/continents/${slug}`);

  const continentData = response.data as ContinentData;

  const continent = {
    continent: continentData.continent,
    imageUrl: continentData.imageUrl,
    extendedSummary: continentData.extendedSummary,
    countriesNum: continentData.countriesNum,
    languagesNum: continentData.languagesNum,
    cities100: continentData.cities100.map((city) => {
      return {
        name: city.name,
        country: city.country,
        imageUrl: city.imageUrl,
        flagUrl: city.flagUrl,
      };
    }),
  };
  return {
    props: {
      data: continent,
    },
    revalidate: 60 * 60 * 24 * 5,
  };
};
