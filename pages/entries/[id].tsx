import { ChangeEvent, useState, useMemo } from 'react';
import { GetServerSideProps } from 'next';
import { Button, capitalize, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Radio, RadioGroup, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Layout } from "../../components/layouts";
import { EntryStatus } from "../../interfaces";
import { isValidObjectId } from 'mongoose';

interface EntryPageProps {

}

const validStatus: EntryStatus[] = ['pending', 'inProgress', 'finished'];

const EntryPage: React.FC<EntryPageProps> = (props) => {
    console.log('props', props)
    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched]);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus);
    }

    const onSave = () => {
        console.log({ inputValue, status });
    }

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
                            title={`Entry: ${inputValue}`}
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
                                value={inputValue}
                                onBlur={() => setTouched(true)}
                                onChange={onTextFieldChanged}
                                helperText={isNotValid && 'Enter a value'}
                                error={isNotValid}
                            />
                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChanged}
                                >
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
                                onClick={onSave}
                                disabled={inputValue.length <= 0}
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <IconButton sx={{
                position: 'fixed',
                bottom: 30,
                right: 30,
                backgroundColor: 'red'
            }}>
                <DeleteOutlineIcon />
            </IconButton>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.params as { id: string };

    if (!isValidObjectId(id)) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            id
        }
    }
}

export default EntryPage;