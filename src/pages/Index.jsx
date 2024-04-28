import { Box, Flex, Heading, Text, Image, Link, VStack, HStack, Button } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" maxW="1200px" m="auto" p={5}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1531315396756-905d68d21b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSb2dlciUyMEZlZGVyZXJ8ZW58MHx8fHwxNzE0MzMwMzU0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Roger Federer" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          Roger Federer
        </Heading>
        <Text fontSize="lg" mb={4}>
          Professional Tennis Player
        </Text>
        <Text mb={6}>Widely considered one of the greatest tennis players of all time, Roger Federer holds numerous records, including 20 Grand Slam singles titles.</Text>

        <HStack spacing={4} mb={6}>
          <Link href="https://twitter.com/rogerfederer" isExternal>
            <Button leftIcon={<FaTwitter />} colorScheme="twitter">
              Twitter
            </Button>
          </Link>
          <Link href="https://www.instagram.com/rogerfederer/" isExternal>
            <Button leftIcon={<FaInstagram />} colorScheme="pink">
              Instagram
            </Button>
          </Link>
          <Link href="https://www.facebook.com/Federer" isExternal>
            <Button leftIcon={<FaFacebookF />} colorScheme="facebook">
              Facebook
            </Button>
          </Link>
          <Link href="https://www.youtube.com/user/RogerFederer" isExternal>
            <Button leftIcon={<FaYoutube />} colorScheme="red">
              YouTube
            </Button>
          </Link>
        </HStack>

        <VStack spacing={5} align="left">
          <Heading as="h2" size="lg">
            Biography
          </Heading>
          <Text>Born on August 8, 1981, in Basel, Switzerland, Roger Federer started playing tennis at a young age and turned professional in 1998. He has won a record eight Wimbledon men's singles titles, six Australian Open titles, five US Open titles, and one French Open title.</Text>
          <Text>Federer has spent a record 310 weeks as the world No. 1 in the ATP rankings, including a record 237 consecutive weeks. He has won 103 ATP singles titles, the second most of all time, including 20 Grand Slam singles titles and 28 ATP Masters 1000 titles.</Text>

          <Heading as="h2" size="lg" mt={10}>
            Career Highlights
          </Heading>
          <Text>
            - 20 Grand Slam singles titles
            <br />
            - 8 Wimbledon titles
            <br />
            - 6 Australian Open titles
            <br />
            - 5 US Open titles
            <br />
            - 1 French Open title
            <br />- Olympic gold medal in doubles (2008) and silver in singles (2012)
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
