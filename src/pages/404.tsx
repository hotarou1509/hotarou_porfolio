import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { Pace, WindupChildren } from "windups";

const NumberFour = () => {
  return (
    <Text
      color={useColorModeValue("gray.800", "whiteAlpha.900")}
      fontFamily={`'osake', sans-serif`}
      fontSize={48}
    >
      4
    </Text>
  );
};

const NotFound: NextPage = () => {
  const zen = `/zen${useColorModeValue("-light", "-dark")}.png`;
  return (
    <Flex h="70vh" alignItems="center" justifyContent="center">
      <Box>
        <Flex justifyContent="center" alignItems="baseline">
          <NumberFour />
          <Image
            src={zen}
            width={10}
            height={10}
            mx={2}
            alt="logo"
            style={{ transform: "rotate(225deg)" }}
          />
          <NumberFour />
        </Flex>
        <WindupChildren>
          <Text my={3}>
            {`I'm sorry ...`}
            <Pace ms={200} />
            {"but there is nothing here to discover 🥲"}
          </Text>
          <Link href="/" fontSize="20px" textAlign="center">
            <p> 🔗 Return to homepage</p>
          </Link>
        </WindupChildren>
      </Box>
    </Flex>
  );
};

export default NotFound;
