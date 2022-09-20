import { useEffect, useReducer } from "react";
import { entriesApi } from "../../apis";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

interface EntriesProviderProps {
    children?: React.ReactNode;
}

export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
}

export const EntriesProvider: React.FC<EntriesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addNewEntry = async (description: string) => {
        const { data } = await entriesApi.post<Entry>('/entries', { description });

        dispatch({ type: '[Entry] Add-Entry', payload: data });
    }

    const updateEntry = (entry: Entry) => {
        dispatch({ type: "[Entry] Update-Entry", payload: entry });
    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');

        dispatch({ type: '[Entry] Refresh-Data', payload: data });
    }

    useEffect(() => {
        refreshEntries();
    }, [])


    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    );
}
