import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={`duration: 0.8, delay: ${delay} `}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
