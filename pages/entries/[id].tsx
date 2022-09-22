import { Button, capitalize, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Layout } from "../../components/layouts";
import { EntryStatus } from "../../interfaces";

interface EntryPageProps {

}

const validStatus: EntryStatus[] = ['pending', 'inProgress', 'finished'];

const EntryPage: React.FC<EntryPageProps> = () => {
    return (
        <Layout title="... ... ...">
            <Grid
                container
                justifyContent="center"
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title="Entry:"
                            subheader={`Created at: 32 minutes ago`}
                        />

                        <CardContent>
                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder="New entry"
                                autoFocus
                                multiline
                                label="New entry"
                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup row>
                                    {
                                        validStatus.map(option => (
                                            <FormControlLabel
                                                key={option}
                                                value={option}
                                                control={<Radio />}
                                                label={capitalize(option)}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={<SaveOutlinedIcon />}
                                variant="contained"
                                fullWidth
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <IconButton sx={{
                position: 'fixed',
                botton: 30,
                right:30,
                backgroundColor: 'red'
            }}>
                <DeleteOutlineIcon />
            </IconButton>
        </Layout>
    );
}

export default EntryPage;