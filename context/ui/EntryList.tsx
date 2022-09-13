import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";

interface EntryListProps {

}

export const EntryList: React.FC<EntryListProps> = () => {
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
                    <EntryCard />
                </List>
            </Paper>
        </div>
    );
}