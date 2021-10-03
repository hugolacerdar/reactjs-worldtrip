import { Grid, Text } from "@chakra-ui/react";
import Numbers from "./Numbers";

interface SummaryProps {
  mainText: string;
  languages: number;
  cities100: number;
  countries: number;
}

export default function Summary({
  mainText,
  languages,
  cities100,
  countries,
}: SummaryProps) {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text>{mainText}</Text>
      <Numbers
        cities100={cities100}
        languages={languages}
        countries={countries}
      />
    </Grid>
  );
}
