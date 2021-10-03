import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticProps } from "next";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import HDivider from "../components/HDivider";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { api } from "../services/api";

interface ContinentSummary {
  id: string;
  continent: string;
  imageUrl: string;
  summary: string;
}

interface HomeProps {
  continents: ContinentSummary[];
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <HDivider />
      <Heading
        fontSize={["lg", "3xl", "4xl"]}
        fontWeight="500"
        textAlign="center"
        mb={[5, 14]}
      >
        Vamos nessa?
        <br />
        Então escolha o seu continente.
      </Heading>
      <Slider continents={props.continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await axios.get("http://localhost:3334/continents/");
    const data = response.data as ContinentSummary[];

    return {
      props: {
        continents: data,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
};
