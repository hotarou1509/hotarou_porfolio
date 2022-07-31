import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import Section from "../components/section";

const MyPhoto = ({ id }: { id: number }) => {
  return (
    <Image
      src={`/hotarou_${id}.jpeg`}
      alt={`hotarou_${id}`}
      borderRadius="lg"
      shadow="md"
    />
  );
};

const SectionIntro = () => {
  return (
    <Section delay={0.1}>
      <Flex w="100%" direction={{ base: "column", lg: "row" }} gap={5} py={5}>
        <Box
          w={{ lg: "40%" }}
          mb={{ base: 10, lg: 0 }}
          textAlign="center"
          justifyContent="center"
        >
          <MyPhoto id={1} />
        </Box>
        <Box w={{ lg: "60%" }} mb={{ base: 10, lg: 0 }}>
          <Box>
            <Heading fontSize={24}>I&apos;m Thai Viet Le</Heading>
            <p style={{ marginBottom: 15 }}>(... or you can call me Hōtarō)</p>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              ⌨️ I&apos;ve been coding for nearly 6 years. I&apos;m a senior
              software developer who loves bulding full-stack applications &
              learning new technologies.
            </p>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              ☕️ When not online, I love hanging out and grabbing a coffee with
              my friends.
            </p>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              My preferred weapons of choice 👇🏻
            </p>
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent="space-between"
            >
              <Box mb={3}>✨ NextJS/ReactJS</Box>
              <Box mb={3}>✨ ExpressJS/NestJS</Box>
            </Flex>
            <Flex
              direction={{ base: "column", lg: "row" }}
              justifyContent="space-between"
            >
              <Box mb={3}>✨ Typescript</Box>
              <Box mb={3}>✨ Substrate (Rust)</Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Section>
  );
};

const SectionBio = () => {
  return (
    <Section delay={0.1}>
      <Flex
        w="100%"
        direction={{ base: "column", lg: "row" }}
        gap={5}
        alignItems="center"
        py={5}
      >
        <Box w={{ lg: "100%" }} mb={{ base: 10, lg: 0 }}>
          <Box>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
            <Heading fontSize="xl">✨ 1995</Heading>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              Born in Danang, Vietnam 🇻🇳
            </p>
            <Heading fontSize="xl">✨ 2019</Heading>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              Graduated from Military Technical Academy majoring in
              Telecommunication Engineering 🎓
            </p>
            <Heading fontSize="xl">✨ 2018-2020</Heading>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              Worked as a freelance embedded software developer 🤖
            </p>
            <Heading fontSize="xl">✨ 2020-present</Heading>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              Worked as a full-stack web developer at intX Vietnam 🌐
            </p>
          </Box>
        </Box>
      </Flex>
    </Section>
  );
};

const SectionHobbies = () => {
  return (
    <Section delay={0.1}>
      <Flex
        w="100%"
        direction={{ base: "column-reverse", lg: "row" }}
        gap={5}
        alignItems="center"
        py={5}
      >
        <Box w={{ lg: "100%" }} mb={{ base: 10, lg: 0 }}>
          <Box>
            <Heading as="h3" variant="section-title">
              Hobbies
            </Heading>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              💛 I love learning about Japanese culture: language,
              entertainment, architechture, traditional values, lifestyle, ...
              🇯🇵
            </p>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              💛 I love gym, indie music, detective novel, coffee ... and of
              course, I love money 😝
            </p>
            <p style={{ marginBottom: 10, textIndent: "1em" }}>
              You can learn more about my hobbies, experience, lifestyle,
              opinion, ... on my blog by clicking the link below 👇🏻
            </p>
            <Link href="/posts" fontSize="20px">
              <p> 🔗 Go to my blog.</p>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Section>
  );
};

const About: NextPage = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <SectionIntro />
      <Divider />
      <SectionBio />
      <Divider />
      <SectionHobbies />
    </Container>
  );
};

export default About;
