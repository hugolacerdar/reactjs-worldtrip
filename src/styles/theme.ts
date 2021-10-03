import { extendTheme } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    gray: {
      "100": "#F5F8FA",
      "300": "#DADADA",
      "500": "#999999",
      "400": transparentize("#999999", 0.5),
      "700": "#47585B",
    },
    yellow: {
      "300": "rgba(255, 186, 8,0.5)",
      "400": "#FFBA08",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.700",
      },
    },
  },
  components: {
    Popover: {
      variants: {
        responsive: {
          popper: {
            maxWidth: "unset",
            width: "unset",
          },
        },
      },
    },
  },
});
