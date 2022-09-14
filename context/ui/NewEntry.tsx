import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface NewEntryProps {

}

export const NewEntry: React.FC<NewEntryProps> = () => {
    const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if (inputValue.trim().length === 0) return;

        console.log('inputValue', inputValue)
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 5 }}>
            {
                isAdding
                    ?
                    <>
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
                        <Box display="flex" justifyContent="space-between">
                            <Button variant="text" onClick={() => setIsAdding(false)}>Cancel</Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                endIcon={<SaveOutlinedIcon />}
                                onClick={onSave}
                            >
                                Save
                            </Button>
                        </Box>
                    </>
                    :
                    <Button
                        fullWidth
                        startIcon={<AddIcon />}
                        variant="outlined"
                        onClick={() => setIsAdding(true)}
                    >
                        Add Task
                    </Button>
            }
        </Box>
    );
}