import { extendTheme } from "@chakra-ui/react";
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      fontFamily: `'Yomogi',sans-serif`,
      color: mode("gray.900", "whiteAlpha.900")(props),
      bg: mode("gray.100", "gray.800")(props),
      transition: "background-color 0.2s",
      lineHeight: "calc(8px + 2ex)",
      fontSize: "18px",
    },

    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    "#__next": {
      minHeight: "100vh",
    },
    hr: {
      borderColor: mode("gray.700", "whiteAlpha.900")(props),
    },
    pre: {
      overflowX: "auto",
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 24,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: GlobalStyleProps) => ({
      color: mode("gray.800", "gray.50")(props),
    }),
  },
};

const fonts = {
  heading: `'Yomogi', sans-serif`,
  logo: `'osake', sans-serif`,
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
