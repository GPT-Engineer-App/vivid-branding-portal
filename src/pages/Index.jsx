import { Container, VStack, Heading, Text, Button, Box, Image, Flex, Input, Textarea } from "@chakra-ui/react";
import { FaRocket, FaQuoteLeft, FaQuoteRight, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Index = () => {
  return (
    <>
      <MotionBox bg="black" color="white" minH="100vh" py={10} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
      </MotionBox>

      <Box bg="gray.800" color="white" py={10} mt={20}>
        <Container maxW="container.xl" centerContent>
          <Heading as="h2" size="xl" color="purple.400" mb={8}>
            Testimonials
          </Heading>
          <VStack spacing={8}>
            <Box textAlign="center" maxW="md">
              <FaQuoteLeft size="2em" color="purple.400" />
              <Text fontSize="lg" color="gray.300" mt={4}>
                Vivid transformed our brand and took our business to the next level. Their team is incredibly talented and professional.
              </Text>
              <FaQuoteRight size="2em" color="purple.400" mt={4} />
              <Text fontSize="md" color="gray.500" mt={2}>
                - John Doe, CEO of Company
              </Text>
            </Box>
            <Box textAlign="center" maxW="md">
              <FaQuoteLeft size="2em" color="purple.400" />
              <Text fontSize="lg" color="gray.300" mt={4}>
                The design and marketing strategies provided by Vivid have been a game-changer for us. Highly recommend!
              </Text>
              <FaQuoteRight size="2em" color="purple.400" mt={4} />
              <Text fontSize="md" color="gray.500" mt={2}>
                - Jane Smith, Marketing Director
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Box bg="black" color="white" py={10} mt={20}>
        <Container maxW="container.xl" centerContent>
          <Heading as="h2" size="xl" color="purple.400" mb={8}>
            Our Work
          </Heading>
          <Flex wrap="wrap" justify="center" spacing={10}>
            <Box maxW="sm" textAlign="center" m={4}>
              <Image src="/images/portfolio1.jpg" alt="Portfolio 1" mb={4} />
              <Text color="gray.300">Project 1</Text>
            </Box>
            <Box maxW="sm" textAlign="center" m={4}>
              <Image src="/images/portfolio2.jpg" alt="Portfolio 2" mb={4} />
              <Text color="gray.300">Project 2</Text>
            </Box>
            <Box maxW="sm" textAlign="center" m={4}>
              <Image src="/images/portfolio3.jpg" alt="Portfolio 3" mb={4} />
              <Text color="gray.300">Project 3</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.800" color="white" py={10} mt={20}>
        <Container maxW="container.xl" centerContent>
          <Heading as="h2" size="xl" color="purple.400" mb={8}>
            Contact Us
          </Heading>
          <Box as="form" maxW="md" w="full">
            <VStack spacing={4}>
              <Input placeholder="Your Name" bg="gray.700" border={0} color="white" _placeholder={{ color: "gray.500" }} />
              <Input placeholder="Your Email" bg="gray.700" border={0} color="white" _placeholder={{ color: "gray.500" }} />
              <Textarea placeholder="Your Message" bg="gray.700" border={0} color="white" _placeholder={{ color: "gray.500" }} />
              <Button colorScheme="purple" size="lg" rightIcon={<FaEnvelope />}>
                Send Message
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Index;