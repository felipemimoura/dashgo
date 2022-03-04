import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Input from "../components/form/Input";

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      {" "}
      <Flex
        as="form"
        p={8}
        borderRadius={8}
        bg="gray.800"
        w="100%"
        maxW="360px"
        direction="column"
      >
        <Stack spacing="4">
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" colorScheme="pink" size="lg" mt="8">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
