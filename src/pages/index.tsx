import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Input } from "../components/form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup
    .string()
    .required("E-mail obrigatorio")
    .email("Deve ser do tipo e-mail"),
  password: yup.string().required("Senha obrigátoria"),
});
const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            label="E-mail"
            type="email"
            {...register("email")}
            name="email"
            error={errors.email}
          />
          <Input
            label="Senha"
            type="password"
            {...register("password")}
            name="password"
            error={errors.password}
          />
        </Stack>
        <Button
          type="submit"
          colorScheme="pink"
          size="lg"
          mt="8"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
