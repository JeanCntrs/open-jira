import { DragEvent, useContext } from 'react';
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Entry } from "../../interfaces";
import { UIContext } from '../../context/ui';
import { useRouter } from 'next/router';

import { dateFunctions } from '../../utils';

interface EntryCardProps {
    entry: Entry;
}

export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
    const { startDragging, endtDragging } = useContext(UIContext);
    const router = useRouter();

    const handleDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id);

        startDragging()
    }

    const handleDragEnd = () => {
        endtDragging()
    }

    const handleClick = () => {
        router.push(`/entries/${entry._id}`);
    }

    return (
        <Card
            onClick={handleClick}
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'end', paddingRight: '2' }}>
                    <Typography variant="body2">{dateFunctions.getFormatDistanceToNow(entry.createdAt)}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}