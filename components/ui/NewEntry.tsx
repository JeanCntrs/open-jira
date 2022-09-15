import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

interface NewEntryProps {

}

export const NewEntry: React.FC<NewEntryProps> = () => {
    const { addNewEntry } = useContext(EntriesContext)
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if (inputValue.trim().length === 0) return;

        addNewEntry(inputValue.trim());

        setIsAddingEntry(false);
        setIsTouched(false);
        setInputValue('');
    }

    const onCancel = () => {
        setIsAddingEntry(false)
        setIsTouched(false);
        setInputValue('');
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 5 }}>
            {
                isAddingEntry
                    ?
                    <>
                        <Box display="flex" justifyContent="end">
                            <Button
                                variant="outlined"
                                color="success"
                                endIcon={<SaveOutlinedIcon />}
                                onClick={onSave}
                            >
                                Save
                            </Button>
                            <Button
                                variant="outlined"
                                color='warning'
                                onClick={onCancel}
                            >
                                Cancel
                            </Button>
                        </Box>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder="New entry"
                            autoFocus
                            multiline
                            label="New entry"
                            helperText={inputValue.trim().length <= 0 && isTouched && 'Enter a value'}
                            error={inputValue.trim().length <= 0 && isTouched}
                            value={inputValue}
                            onChange={onTextFieldChanged}
                            onBlur={() => setIsTouched(true)}
                        />
                    </>
                    :
                    <Button
                        fullWidth
                        startIcon={<AddIcon />}
                        variant="outlined"
                        onClick={() => setIsAddingEntry(true)}
                    >
                        Add Task
                    </Button>
            }
        </Box>
    );
}