import { useContext, useMemo, DragEvent } from 'react';
import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from "../../context/entries";
import { UIContext } from '../../context/ui';
import styles from './EntryList.module.css';

interface EntryListProps {
    status: EntryStatus
}

export const EntryList: React.FC<EntryListProps> = ({ status }) => {
    const { entries } = useContext(EntriesContext);
    const { isDragging } = useContext(UIContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const handleDrop = (event: DragEvent) => {
        const id = event.dataTransfer.getData('text');
        console.log('id', id)
    }

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
    }

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={isDragging ? styles.dragging : ''}
        >
            {/* overflow: 'auto' */}
            <Paper sx={{
                height: 'calc(100vh - 180px)',
                overflow: 'scroll',
                backgroundColor: 'transparent',
                '&::-webkit-scrollbar': { display: 'none' },
                padding: '1px 5px'
            }}>
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
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