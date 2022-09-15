import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

interface UIProviderProps {
    children?: React.ReactNode;
}

export interface UIState {
    isSidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    isSidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false

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

    const startDragging = () => {
        dispatch({type: 'UI - Start Dragging'});
    }

    const endtDragging = () => {
        dispatch({type: 'UI - End Dragging'});
    }

    return (
        <UIContext.Provider value={{
            // isSidemenuOpen: state.isSidemenuOpen
            ...state,

            // Methods
            openSideMenu,
            closeSideMenu,
            setIsAddingEntry,
            startDragging,
            endtDragging
        }}>
            {children}
        </UIContext.Provider>
    );
}
