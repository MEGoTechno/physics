import React, { useEffect, useState } from 'react'
import { FlexInBetween } from '../tools/FlexInBetween'
import { alpha, AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Typography, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../toolkit/globalSlice';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { user_roles } from '../../settings/constants/roles';
import NavbarNotLoged from './NabarNotLoged';
import Logo from './Logo';
import { buttonStyle, outLinedHoverBtnStyle, sendSuccess } from '../../style/buttonsStyles';
import ModeToggler from './ModeToggler';
import MeToggler from './meToggler/MeToggler';

export default function Navbar({ setSideBar, isOpenedSidebar, isNonMobile, sideBarWidth }) {


    const { user } = useSelector(s => s.global)
    const navigate = useNavigate()
    const location = useLocation()
    const theme = useTheme()
    const dispatch = useDispatch()

    const [top, setTop] = useState(-100);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos === 0) {
                setTop(-100); // Hide navbar
            } else {
                setTop(0); // Show navbar
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <AppBar sx={{
            position: location.pathname === '/' && !user ? 'fixed' : 'sticky',
            top: location.pathname === '/' && !user ? `${top}px` : 0, left: 0,
            width: isOpenedSidebar && isNonMobile && (location.pathname === '/' && !user) ? `calc(100% - ${sideBarWidth})` : "100%",
            color: 'neutral.0',
            paddingY: '6px',
            boxShadow: 'none',
            backgroundImage: 'none',
            backdropFilter: isOpenedSidebar ? 0 : 'blur(10px)',
            pr: { md: '40px' },
            backgroundColor: isOpenedSidebar ? "transparent" : alpha(theme.palette.background.default, .6),
            zIndex: 1000,
            direction: 'ltr',
            transition: '.3s all',
        }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* left side */}
                <FlexInBetween>
                    <MeToggler openSidebar={() => setSideBar(!isOpenedSidebar)} isOpenedSidebar={isOpenedSidebar} />
                    <Logo />

                </FlexInBetween>

                <FlexInBetween gap={".8rem"}>
                    <ModeToggler toggleMode={() => dispatch(setMode())} />

                    {user ?
                        <>
                            <Tooltip title="الاشعارات">
                                <IconButton onClick={() => user.role === user_roles.ADMIN ? navigate("/management/messages") : navigate("/messages")}>
                                    <Badge color="secondary" variant="dot">
                                        <EmailIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="بروفايلك">
                                <IconButton onClick={() => navigate("/profile")}>
                                    <AccountCircleIcon />
                                </IconButton>
                            </Tooltip>
                        </> : <NavbarNotLoged isNonMobile={isNonMobile} />}

                </FlexInBetween>
            </Toolbar>
        </AppBar >
    )
}
