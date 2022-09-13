import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface EntryCardProps {

}

export const EntryCard: React.FC<EntryCardProps> = () => {
    return (
        <Card sx={{ marginBottom: 1 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>This is a description</Typography>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'end', paddingRight: '2' }}>
                    <Typography variant="body2">30 minutes ago</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}