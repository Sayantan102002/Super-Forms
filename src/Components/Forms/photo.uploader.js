import { Box, Button, Input, InputBase, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import CircularProgress from '@mui/material/CircularProgress';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';
import CircularProgressWithLabel from '../Helper/CircularProgressWithLabel'
const styles = {
    container: {
        border: '1px solid red',
        borderRadius: '2vw',
        borderStyle: 'dashed',
        // display: 'flex', flexDirection: 'column'
    },
    uploadBtn: {
        // padding: '2vh 2vw',
        height: 'fit-content',
        "& > ::file-selector-button": {
            // backgroundColor: 'red',
            borderRadius: '2vw',
            borderStyle: 'dashed',
            outline: 'none',
            cursor: 'pointer',
            // padding: '2rem',


        }
    }
}

export default function PhotoUploader(props) {
    const { formImg, setFormImg } = props
    const [file, setFile] = useState(null);
    // let progress = 0;
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    useEffect(() => {
        // console.log(new File(file));
        uploader(file);
        console.log(loading);
    }, [file]);
    function uploader() {
        if (file == null) return;
        const imageRef = ref(storage, `images/${file.name + v4()}`)
        const uploadTask = uploadBytesResumable(imageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                setLoading(true);
                console.log(loading);
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const pro = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(pro);
                console.log('Upload is ' + pro + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
                console.log(loading);
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                    setFormImg(downloadURL);
                    console.log('File available at', downloadURL);
                });
                setLoading(false);
                alert("Upload is complete");
            }
        );
    }
    return (
        <Box sx={styles.container}>
            <InputBase type="file" accept='image/*' defaultValue={file} onChange={(event) => { setFile(event.target.files[0]) }} sx={styles.uploadBtn} />
            <Box>
                {loading ? <CircularProgressWithLabel value={progress} /> : <></>}
            </Box>
            <Box>

            </Box>
        </Box>
    )
}
