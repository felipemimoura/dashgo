import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SidebarContext";
import Logo from "./Logo";
import { NotificatonBar } from "./NotificationBar";
import { Profile } from "./Profile";
import Search from "./Search";

export default function Header() {
  const isWideView = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { onOpen } = useSidebarDrawer();
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
      {!isWideView && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mt="2"
        ></IconButton>
      )}
      <Logo />

      {isWideView && <Search />}

      <NotificatonBar />

      <Profile showProfileData={isWideView} />
    </Flex>
  );
}
