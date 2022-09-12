import { useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";

interface EntriesProviderProps {
    children?: React.ReactNode;
}

export interface EntriesState {
    entries: [];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
}

export const UIProvider: React.FC<EntriesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    );
}
