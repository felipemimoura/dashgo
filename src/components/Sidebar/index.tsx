import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import Navlink from "./Navlink";
import Navsection from "./Navsection";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Navsection title="GERAL">
          <Navlink icon={RiDashboardLine}>Dashboard</Navlink>
          <Navlink icon={RiContactsLine}>Contatos</Navlink>
        </Navsection>

        <Navsection title="AUTOMAÇÃO">
          <Navlink icon={RiInputMethodLine}>Formulários</Navlink>
          <Navlink icon={RiGitMergeLine}>Automação</Navlink>
        </Navsection>
      </Stack>
    </Box>
  );
}