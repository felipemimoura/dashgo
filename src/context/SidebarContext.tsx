import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";
interface SidebarContextProviderProps {
  children: ReactNode;
}

type SiderbarContextType = UseDisclosureReturn;

const SidebarContext = createContext({} as SiderbarContextType);

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const disclosure = useDisclosure();
  const history = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [history.asPath]);
  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarContext);
