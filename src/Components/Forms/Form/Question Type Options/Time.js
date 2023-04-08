import React from 'react'
import { Box, IconButton, Typography } from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
export default function Time() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
            <IconButton>
                <AccessTimeFilledIcon color="primary" />
            </IconButton>
            <Typography sx={{ margin: "0 .1vw" }}>
                Time
            </Typography>
        </Box>
    )
}
