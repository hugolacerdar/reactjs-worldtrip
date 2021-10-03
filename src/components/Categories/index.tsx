import { Grid, GridItem } from "@chakra-ui/react";
import Category from "./Category";

export default function Categories() {
  return (
    <Grid
      w="100%"
      templateColumns={[
        "repeat(auto-fill, minmax(100px, 1fr))",
        "1fr 1fr",
        "repeat(5, 1fr)",
      ]}
      align="center"
      mx="auto"
      mt={["10", "32"]}
      maxW={["300px", "1160px"]}
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <Category
          icon={{ fileName: "cocktail", alt: "Taça de coquetel." }}
          title="vida noturna"
        />
      </GridItem>
      <GridItem>
        <Category
          icon={{
            fileName: "surf",
            alt: "Prancha de surf verticalmente fincada na areia da praia.",
          }}
          title="praia"
        />
      </GridItem>
      <GridItem>
        <Category
          icon={{
            fileName: "building",
            alt: "Prédio moderno.",
          }}
          title="moderno"
        />
      </GridItem>
      <GridItem>
        <Category
          icon={{
            fileName: "museum",
            alt: "Construção antiga com colunas.",
          }}
          title="clássico"
        />
      </GridItem>
      <GridItem colSpan={[2, 2, 1]} mx={["auto", "auto", 0]}>
        <Category
          icon={{
            fileName: "earth",
            alt: "Globo terrestre.",
          }}
          title="e mais..."
        />
      </GridItem>
    </Grid>
  );
}
