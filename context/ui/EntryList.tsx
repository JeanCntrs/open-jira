import { useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from "../entries";

interface EntryListProps {
    status: EntryStatus
}

export const EntryList: React.FC<EntryListProps> = ({ status }) => {
    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    return (
        <div>
            {/* overflow: 'auto' */}
            <Paper sx={{
                height: 'calc(100vh - 180px)',
                overflow: 'scroll',
                backgroundColor: 'transparent',
                '&::-webkit-scrollbar': { display: 'none' },
                padding: '1px 5px'
            }}>
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    );
}