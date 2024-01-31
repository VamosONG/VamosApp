import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box>
      <Spinner
        thickness="4px"
        speed="1.3s"
        emptyColor="gray"
        color="gray"
        bgGradient="linear(to-r, blue.200, pink.500)"
        size="xl"
      />
    </Box>
  );
};
export default Loader;
