import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";

interface EntriesProviderProps {
    children?: React.ReactNode;
}

export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'aaaa aaaa aaaa',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'bbbb bbbb bbbb',
            status: 'inProgress',
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'cccc cccc cccc',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ]
}

export const EntriesProvider: React.FC<EntriesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    );
}