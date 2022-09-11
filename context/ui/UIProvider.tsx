import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

interface UIProviderProps {
    children?: React.ReactNode;
}

export interface UIState {
    isSidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    isSidemenuOpen: false
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({type: "UI - Open Sidebar"});
    }

    return (
        <UIContext.Provider value={{
            // isSidemenuOpen: state.isSidemenuOpen
            ...state,

            // Methods
            openSideMenu
        }}>
            {children}
        </UIContext.Provider>
    );
}
