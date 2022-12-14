import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
export default function FormCard(props) {
    const { data, formId, deleteForm } = props;
    const history = useHistory();
    const handleClick = () => {
        history.push("/form/" + formId)
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="160"
                image="https://s3.amazonaws.com/paperform-blog/2022/11/Contact--Form-in-HTML-@2x.png"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data?.form?.formName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data?.form?.formDesc}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleClick} >
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
            {/* <Box sx={{ height: '5vh', border: '1px solid red', width: "100%" }}>
                <Typography
                variant="body2"
                >
                    
                </Typography>
            </Box> */}
        </Card>
    );
}