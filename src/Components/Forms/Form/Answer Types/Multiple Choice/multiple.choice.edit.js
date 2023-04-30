import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Checkbox from '@mui/material/Checkbox';
import { Box, IconButton, Radio, TextField } from '@mui/material';
import { useDebounce } from 'react-use';
import useOptionApis from '../../../../Helper/option.question.hooks';
export default function MultipleChoiceEdit(props) {
    const { optionId, index, option, createOption, deleteOption } = props;
    const [optionText, setOptionText] = useState(option?.optionText || "");
    const { updateOption } = useOptionApis()
    useDebounce(() => {
        updateOption({
            optionObj: {
                _id: optionId,
                optionText
            }
        })
    }, 1000, [optionText])
    return (
        <Box>
            <FormControlLabel control={<Radio disabled />} label={<TextField variant='standard' value={optionText} onChange={(e) => setOptionText(e.target.value)} />} />
            <IconButton onClick={() => {
                createOption(index)
                // getForms(formId)
            }} >
                <AddCircleOutlineIcon />
            </IconButton>
            <IconButton onClick={() => {
                deleteOption(optionId, index)
            }} >
                <DeleteOutlineIcon />
            </IconButton>
        </Box>
    )
}
