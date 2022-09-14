import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

interface UIProviderProps {
    children?: React.ReactNode;
}

export interface UIState {
    isSidemenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
    isSidemenuOpen: false,
    isAddingEntry: false

}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({ type: "UI - Open Sidebar" });
    }

    const closeSideMenu = () => dispatch({ type: "UI - Close Sidebar" });

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });
    }

    return (
        <UIContext.Provider value={{
            // isSidemenuOpen: state.isSidemenuOpen
            ...state,

            // Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry
        }}>
            {children}
        </UIContext.Provider>
    );
}
