import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from "react";
const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* search bar */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='search' />
                <IconButton type='button' sx={{ p: 1 }}>
                    <SearchOutlinedIcon />
                </IconButton>
            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode} type='button'>
                    {theme.palette.mode == 'dark' ?
                        <DarkModeOutlinedIcon /> :
                        <LightModeOutlinedIcon />
                    }
                </IconButton>
                <IconButton type='button'>
                    <NotificationsNoneOutlinedIcon />
                </IconButton>
                <IconButton type='button'>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton type='button'>
                    <PersonOutlineOutlinedIcon />
                </IconButton>

            </Box>


        </Box>

    )

}

export default Topbar;