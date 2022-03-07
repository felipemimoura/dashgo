import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import Navlink from "./Navlink";
import Navsection from "./Navsection";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <Navsection title="GERAL">
        <Navlink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </Navlink>
        <Navlink href="/users" icon={RiContactsLine}>
          Contatos
        </Navlink>
      </Navsection>

      <Navsection title="AUTOMAÇÃO">
        <Navlink href="/forms" icon={RiInputMethodLine}>
          Formulários
        </Navlink>
        <Navlink href="/automation" icon={RiGitMergeLine}>
          Automação
        </Navlink>
      </Navsection>
    </Stack>
  );
}
