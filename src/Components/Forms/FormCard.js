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
import useFormApis from '../Helper/form.hooks';
export default function FormCard(props) {
    const { deleteForm } = useFormApis()
    const { data } = props;
    const history = useHistory();
    const handleClick = () => {
        history.push({
            pathname: "/dashboard/form/" + data?.name,
            state: { questions: data?.questions }
        })
    }
    return (
        <Card sx={{ minWidth: 328, maxWidth: 345, border: "2px solid purple", boxShadow: "3px 3px 3px grey" }}>
            <CardMedia
                component="img"
                height="170"
                image={data?.image || "https://s3.amazonaws.com/paperform-blog/2022/11/Contact--Form-in-HTML-@2x.png"}
                alt="green iguana"
                sx={{ objectFit: "fill"/*, minWidth: 345 */ }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ wordWrap: "break-word" }}>
                    {data?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data?.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleClick} >
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteForm(data?._id)} >
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