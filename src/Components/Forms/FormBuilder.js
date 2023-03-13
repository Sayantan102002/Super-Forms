import React from 'react'
import NavBar from '../NavBar'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Button } from '@mui/material';
import Questions from './Form/Questions';
export default function FormBuilder() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const component = (value) => {
        switch (value) {
            case 0:
                return <div><Questions/> </div>
            case 1:
                return <div>This is Responses component </div>
            default:
                return null;
        }
    }
    return (
        <div>
            <NavBar />
            <Box maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2vh 0' }}>
                <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="Form" />
                    <Tab label="Responses" />
                </Tabs>
            </Box>
            {component(value)}
        </div>
    )
}
