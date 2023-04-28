import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Popover, useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import useFormApis from '../Helper/form.hooks';
import { useTheme } from '@mui/material/styles'

import Zoom from '@mui/material/Zoom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ShareIcon from '@mui/icons-material/Share';
import cancel from '../../assets/cancel2.jpg'
import SharedList from '../Share/SharedList';

export default function FormCard(props) {
    const { deleteForm } = useFormApis()
    const theme = useTheme();
    const { data } = props;
    const history = useHistory();
    const handleClick = () => {
        history.push({
            pathname: "/dashboard/form/" + data?._id,
            state: { questions: data?.questions }
        })
    }
    const handleClose = () => {
        setOpen(false);
    }
    const [open, setOpen] = React.useState(false)
    const [visible, setVisible] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Zoom in={visible}
            timeout={{
                appear: 1000,
                enter: 1000,
                exit: 700
            }}
        >
            <Card sx={{
                minWidth: { xs: 328, md: 300 },
                maxWidth: { xs: 328, md: 300 },
                border: "2px solid purple",
                boxShadow: "3px 3px 3px grey"
            }}>
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
                    <IconButton onClick={() => setOpen(true)} >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} aria-describedby="simple-popover">
                        <ShareIcon />
                    </IconButton>

                </CardActions>
                <SharedList anchorEl={anchorEl} setAnchorEl={setAnchorEl} form={data} />



                <Dialog open={open} onClose={handleClose} maxWidth="xs">

                    <DialogTitle>Delete</DialogTitle>
                    <Zoom in={open}>
                        <DialogContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <img src={cancel} style={!isMobile ? {
                                width: '10vw'
                            } : { width: "30vw" }} />
                            <DialogContentText>
                                Do you really want to delete <b>{data?.name}</b> form?
                            </DialogContentText>
                        </DialogContent>
                    </Zoom>
                    <DialogActions>
                        <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={async () => {
                                deleteForm(data?._id);
                                setOpen(false);
                                setVisible(false)
                            }}
                        >
                            Delete
                        </Button>
                    </DialogActions>

                </Dialog>


            </Card>
        </Zoom>
    );
}