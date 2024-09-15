import React from 'react'
import { FlexInBetween } from '../tools/FlexInBetween'
import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../toolkit/globalSlice';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { FilledHoverBtn, OutLinedHoverBtn, StyledBtn, SuccessBtn } from '../../style/buttonsStyles';

import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SwitchMood from '../tools/SwitchMood';
import { lang } from '../../settings/constants/arlang';

export default function NavbarNotLoged({ isNonMobile }) {


    const navigate = useNavigate()
    const theme = useTheme()

    if (isNonMobile)
        return (
            <Box display={'flex'} gap={".8rem"}>
                <Tooltip title={lang.LOGIN_ENTRY}>
                    <Button sx={{
                        fontWeight: "700",
                        border: '2px solid', borderColor: 'transparent',
                        color: 'primary.200', transition: '.3s', minWidth: '130px', borderRadius: '8px',
                        "&:hover": {
                            borderColor: 'primary.200'
                        }
                    }} component={Link} to="/login" endIcon={<LoginIcon />}>{lang.LOGIN_ENTRY}</Button>
                </Tooltip>

                <Tooltip title={lang.SIGNUP}>
                    <FilledHoverBtn sx={{ minWidth: '130px' }} endIcon={<PersonAddAltIcon />} onClick={() => navigate('/signup')} >{lang.SIGNUP}</FilledHoverBtn>
                </Tooltip>
            </Box>
        )
}
