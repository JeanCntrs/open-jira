import { createContext } from "react";

interface ContextProps {
    isSidemenuOpen: boolean;

    // Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);