import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const createUserFormSchema = yup.object({
  name: yup.string().required("Nome Obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Deve ser do tipo email"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No minimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser íguais"),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreate: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreate)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Cadastrar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                error={errors.name}
                label="Nome Completo"
                {...register("name")}
                name="name"
              />
              <Input
                {...register("email")}
                error={errors.email}
                name="email"
                label="E-mail"
                type="email"
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
              <Input
                {...register("password")}
                error={errors.password}
                name="password"
                label="Senha"
                type="password"
              />
              <Input
                {...register("password_confirmation")}
                error={errors.password_confirmation}
                name="password_confirmation"
                label="Confirmação de senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
