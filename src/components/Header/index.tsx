import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Logo from "./Logo";
import { NotificatonBar } from "./NotificationBar";
import { Profile } from "./Profile";
import Search from "./Search";

export default function Header() {
  const isWideView = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      {isWideView && <Search />}

      <NotificatonBar />

      <Profile showProfileData={isWideView} />
    </Flex>
  );
}
