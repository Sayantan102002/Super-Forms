import React from 'react'
import { Box, IconButton, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export default function FileUpload() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
            <IconButton>
                <CloudUploadIcon color="primary" />
            </IconButton>
            <Typography sx={{ margin: "0 .1vw" }}>
                File Upload
            </Typography>
        </Box>
    )
}
