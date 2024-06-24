import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" color="white" minH="100vh" py={10}>
      <Container maxW="container.xl" centerContent>
        <VStack spacing={8} textAlign="center">
          <Heading as="h1" size="2xl" color="purple.400">
            Welcome to Vivid
          </Heading>
          <Text fontSize="xl" color="gray.300">
            Elevate your brand with our premium branding services.
          </Text>
          <Button colorScheme="purple" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </VStack>
        <Flex mt={20} direction={{ base: "column", md: "row" }} spacing={10} justify="space-around" align="center">
          <Box maxW="sm" textAlign="center">
            <Image src="/images/branding.svg" alt="Branding" mb={4} />
            <Heading as="h3" size="lg" color="purple.400">
              Branding
            </Heading>
            <Text color="gray.300">
              Create a strong, professional brand identity that stands out.
            </Text>
          </Box>
          <Box maxW="sm" textAlign="center">
            <Image src="/images/design.svg" alt="Design" mb={4} />
            <Heading as="h3" size="lg" color="purple.400">
              Design
            </Heading>
            <Text color="gray.300">
              Stunning designs that capture your brand's essence.
            </Text>
          </Box>
          <Box maxW="sm" textAlign="center">
            <Image src="/images/marketing.svg" alt="Marketing" mb={4} />
            <Heading as="h3" size="lg" color="purple.400">
              Marketing
            </Heading>
            <Text color="gray.300">
              Effective marketing strategies to grow your business.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;