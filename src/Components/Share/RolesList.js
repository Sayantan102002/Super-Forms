import * as React from 'react';
import Popover from '@mui/material/Popover';
import UsersList from './UsersList';
import { Box } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
let roles = [
    "Owner", "Admin", "Editor", "None"
]
export default function RolesList(props) {
    const { anchorEl, setAnchorEl, form, role } = props;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log(role, "Role")
    const open = Boolean(anchorEl);
    const id = open ? 'mouse-over-popover' : undefined;

    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}

            >
                <Box>
                    {roles.map((currentRole) => {
                        return <Box
                            key={currentRole}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                maxHeight: 300,
                                minWidth: 100,
                                px: 1,
                                cursor: 'pointer'
                            }}>
                            <Box>
                                <Typography variant="body1">{currentRole}</Typography>
                            </Box>
                            {/* {form?.shared?.map((share) => {
                                if (share.role === role) {
                                    // console.log(share.role, role, "Roles");
                                    return (

                                    )
                                }
                                else
                                    return;
                            })} */}

                            <Box>
                                <IconButton>
                                    {role === currentRole ? <CheckIcon /> :
                                        <Box sx={{
                                            py: 1.5
                                        }} >
                                        </Box>}
                                </IconButton>
                            </Box>
                        </Box>
                    })}
                </Box>
            </Popover>
        </div>
    );
}
