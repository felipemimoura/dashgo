import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ElementType } from "react";
import ActiveLink from "../ActiveLink";

interface NavlinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export default function Navlink({
  icon,
  children,
  href,
  ...rest
}: NavlinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
