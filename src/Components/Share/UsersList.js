import { Avatar, Box, IconButton, Paper, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useUserApis from '../Helper/user.hooks'

import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RolesList from './RolesList';
import Checkbox from '@mui/material/Checkbox';
import UserCard from './UserCard';
export default function UsersList(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const { form } = props;
    const { getUsers, loading } = useUserApis();
    const { usersDictionary, userIds } = useSelector((state) => state.users)

    const [role, setRole] = useState(null);
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        getUsers();
        // console.log(usersDictionary)
    }, [])
    return (
        <Box
            sx={{
                // p: 1,
                maxHeight: 300,
                minWidth: 100
            }}
        >
            <Box sx={{
                p: 2,
                pb: 1
            }}>
                <InputBase
                    startAdornment={
                        <SearchIcon
                            sx={{
                                px: 1,
                            }}
                            fontSize="small"
                        />
                    }
                    placeholder="Search"
                    color="default"
                    sx={{
                        border: '1px solid',
                        background: "#f5f4f6",
                        borderRadius: "10px",
                        py: 0.7,
                        width: {
                            md: "100%",
                            // xs: "50vw"
                        },
                        fontSize: {
                            md: "1vw",
                            // xs: "4vw"
                        }

                    }}
                />
            </Box>
            {loading ? <CircularProgress /> : <>
                {userIds.map((userId) => {
                    const user = usersDictionary[userId];
                    console.log(user)
                    return <UserCard
                        user={user}
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                        form={form}
                    />

                })}
            </>}
            {/* {userIds.map((userId) => {
                    const user = usersDictionary[userId];
                    {form?.shared?.map((share) => {
                        
                    })}
                })} */}
            {/* <RolesList anchorEl={anchorEl} setAnchorEl={setAnchorEl} form={form} /> */}
        </Box>
    )
}
