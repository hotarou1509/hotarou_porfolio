import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Tokyo from "../components/tokyo";
import NoSsr from "../components/no-ssr";
import { WindupChildren } from "windups";

const Intro = () => {
  return (
    <Container maxW="container.xl">
      <Flex
        w="100%"
        direction={{ base: "column-reverse", lg: "row" }}
        gap={5}
        alignItems="center"
      >
        <Box
          w={{ lg: "50%" }}
          h={{ lg: "100vh" }}
          display="flex"
          alignItems="center"
          mb={{ base: 16, lg: 0 }}
        >
          <Box>
            <Box display={{ lg: "flex" }} w="full" my={5}>
              <Box flexGrow={1}>
                <Heading
                  as="h2"
                  fontSize="24px"
                  color="gray.500"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  {"Hi, my name is_"}
                </Heading>
                <Heading
                  as="h2"
                  variant="page-title"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  {"Thai Viet Le (Hōtarō)"}
                </Heading>
                <Heading
                  as="h2"
                  fontSize="28px"
                  variant="page-title"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  {"I am a full-stack developer."}
                </Heading>
              </Box>
            </Box>
            <Box textAlign={{ base: "center", lg: "left" }} fontSize="18px">
              <p>
                🚀 I am a full-stack web developer based in Danang with a
                passion for building amazing digital services/applications for
                my customers.
              </p>
              <p>
                👨‍💻 I&apos;ve got a knack for all things launching products, from
                planning and designing all the way to solving real-life problems
                with code.
              </p>
            </Box>
            <Box
              textAlign={{ base: "center", lg: "left" }}
              fontSize="16px"
              mt={2}
            >
              <WindupChildren>
                <Link
                  href="https://www.linkedin.com/in/thai-viet-le-66b5641a2/"
                  isExternal
                  fontSize="20px"
                >
                  <p> 🔗 ... do you want to work with me?</p>
                </Link>
                <Link href="/about" fontSize="20px">
                  <p> 🔗 ... or learn more about me.</p>
                </Link>
              </WindupChildren>
            </Box>
          </Box>
        </Box>
        <Box
          w={{ base: "100%", lg: "50%" }}
          h={{ base: "50vh", lg: "100vh" }}
          my={{ base: 10, lg: 0 }}
        >
          <NoSsr>
            <Tokyo />
          </NoSsr>
        </Box>
      </Flex>
    </Container>
  );
};

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Intro />
    </Container>
  );
};

export default Home;
