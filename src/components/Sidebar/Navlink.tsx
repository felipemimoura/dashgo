import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

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
    <Link href={href} passHref>
      <ChakraLink display="flex" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
