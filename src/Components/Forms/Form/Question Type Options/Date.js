import React from 'react'
import { Box, IconButton, Typography } from "@mui/material";
import EventIcon from '@mui/icons-material/Event';
export default function Date() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
            <IconButton>
                <EventIcon color="primary" />
            </IconButton>
            <Typography sx={{ margin: "0 .1vw" }}>
                Date
            </Typography>
        </Box>
    )
}
