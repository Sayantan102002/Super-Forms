import React from 'react'
import { Avatar, Box, IconButton, Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RolesList from './RolesList';
export default function UserCard(props) {
    const { user, setAnchorEl, anchorEl, form } = props
    // const { usersDictionary, userIds } = useSelector((state) => state.users)
    return (
        <>

            <Box
                aria-haspopup="true"
                aria-owns='mouse-over-popover'
                variant="default"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 0.5,
                    // mx: 3,
                    px: 1,
                    "&:hover": {
                        backgroundColor: "#f7f5f5"
                    },
                    cursor: 'pointer',
                    // border: '1px solid red'


                }}


                onClick={(event) => setAnchorEl(event.currentTarget)}

                aria-describedby="simple-popover"
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'

                }}>
                    <Avatar
                        src={user?.photoURL}
                        alt={user?.name}
                        sx={{
                            width: 32,
                            height: 32,
                            mr: 1
                        }}
                    />
                    <Typography variant="body1">
                        {user.name}
                        {form?.shared?.map((share) => {
                            console.log(share, "Share", share?.role)
                            if (share.user === user?._id) {
                                if (share?.role === "Owner") {
                                    return (
                                        <><Typography variant="caption" sx={{
                                            color: "red",
                                            fontStyle: "italic"
                                        }}>
                                            {" "}({share.role})
                                        </Typography>
                                        </>

                                    )
                                }
                                else if (share?.role === "Admin") {
                                    return <Typography variant="caption" sx={{
                                        color: "green",
                                        fontStyle: "italic"
                                    }}>
                                        {" "}({share.role})
                                    </Typography>
                                }
                                else if (share?.role === "Editor") {
                                    return <Typography variant="caption" sx={{
                                        color: "blue",
                                        fontStyle: "italic"
                                    }}>
                                        {" "}({share.role})
                                    </Typography>
                                }

                            }
                            // setRole(share?.role || "None")
                        })}
                        <br />
                        <Typography variant="caption">
                            {user.email}
                        </Typography>
                    </Typography>
                </Box>
                <Box>
                    <IconButton>
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
            </Box>
            {
                form?.shared?.map((share) => {
                    if (share.user === user?._id)
                        return <RolesList anchorEl={anchorEl} setAnchorEl={setAnchorEl} form={form} role={share?.role} />
                })
            }


        </>
    )
}
