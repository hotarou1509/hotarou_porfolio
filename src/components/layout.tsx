import type { PropsWithChildren, ReactNode } from "react";
import type { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";
import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import styled from "@emotion/styled";
import { BaseRouter } from "next/dist/shared/lib/router/router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  position: relative;
  img {
    position: absolute;
    left: 50%;
    transform: rotate(-135deg);
    z-index: -1;
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(225deg);
  }
`;

type LinkProps = {
  href: string;
  path: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children: string | ReactNode;
  [props: string]: any;
};

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "gray.50");
  const activeColor = useColorModeValue("gray.50", "gray.800");
  const activeBackground = useColorModeValue("gray.800", "gray.50");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        target={target}
        p={2}
        bg={active ? activeBackground : undefined}
        color={active ? activeColor : inactiveColor}
        borderRadius="md"
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Logo = () => {
  const zen = `/zen-dark.png`;
  //const zen = `/zen${useColorModeValue("-light", "-dark")}.png`;

  return (
    <NextLink href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={zen} width={10} height={10} mr={2} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily={`'osake', sans-serif`}
          >
            Hotaro
          </Text>
        </LogoBox>
      </a>
    </NextLink>
  );
};

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

const NavBar = ({ path, ...props }: { path: string }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xl"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full" }}
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          fontSize="18px"
        >
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Blog
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/hotarou1509?tab=repositories"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
        </Stack>

        <Box display="flex" justifyContent="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton>
                <Box
                  border="1px"
                  borderColor="gray.300"
                  borderRadius="md"
                  boxShadow="sm"
                  h="2.5rem"
                  w="2.5rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <HamburgerIcon />
                </Box>
              </MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as="a">Home</MenuItem>
                </NextLink>
                <NextLink href="/about" passHref>
                  <MenuItem as="a">About</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as="a">Blog</MenuItem>
                </NextLink>
                <MenuItem
                  as="a"
                  href="https://github.com/hotarou1509?tab=repositories"
                  target="_blank"
                >
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const Footer = () => {
  return (
    <Container as="footer" role="contentinfo" py={5}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack
          display="flex"
          justify="space-between"
          direction="column"
          align="center"
        >
          <Logo />
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/hotarou1509"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.facebook.com/andrea.t.delverrocchio"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="1.25rem" />}
            />
          </ButtonGroup>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Thai Viet Le. All rights reserved.
            Made with ❤️ .
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

const Layout: React.FC<{ children: ReactNode; router: BaseRouter }> = ({
  children,
  router,
}: {
  children: ReactNode;
  router: BaseRouter;
}) => {
  return (
    <Box as="main" pb={2}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hōtarō</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/zen.ico" />
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.xl" pt={16}>
        {children}
      </Container>
      <Divider />
      <Footer />
    </Box>
  );
};

export default Layout;
