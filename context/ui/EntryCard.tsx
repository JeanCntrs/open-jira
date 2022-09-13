import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Entry } from "../../interfaces";

interface EntryCardProps {
    entry: Entry;
}

export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
    return (
        <Card sx={{ marginBottom: 1 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'end', paddingRight: '2' }}>
                    <Typography variant="body2">30 minutes ago</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}