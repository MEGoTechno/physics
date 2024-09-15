import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Button, Divider, IconButton, Typography, useTheme } from '@mui/material';
import { FlexInBetween } from '../tools/FlexInBetween';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../toolkit/globalSlice';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { ErrorBtn, FilledHoverBtn, OutLinedHoverBtn, StyledBtn, buttonError, buttonStyle } from '../../style/buttonsStyles';
import ModalControlled from '../tools/ModalControlled';

import { navLinks } from '../../settings/navLinks';
import UserHeader from '../molecules/UserHeader';
import Logo from './Logo';
import LoggedDrawerItems from './LoggedDrawerItems';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { lang } from '../../settings/constants/arlang';


export default function SideBar({ isOpenedSidebar, setSideBar, isNonMobile, sideBarWidth }) {

    const theme = useTheme()
    const [isShowModal, setShowModal] = useState(false)
    const { user } = useSelector(state => state.global)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const userLogout = () => {
        dispatch(logout())
        setShowModal(false)
    }

    return (
        <Box component="nav" sx={{ transition: ".3s all ease" }}>

            <Drawer
                variant={isNonMobile ? 'persistent' : "temporary"}
                anchor='left'
                open={isOpenedSidebar}
                onClose={() => setSideBar(false)}
                sx={{
                    width: sideBarWidth,
                    zIndex: 999,
                    direction: 'ltr',
                    "& .MuiDrawer-paper": {
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.background.alt,
                        boxSixing: "border-box",
                        borderWidth: isNonMobile ? 0 : "2px",
                        width: sideBarWidth,
                    },
                }}
            >
                <Box width="100%">

                    <Box m="1rem 2rem 3rem 2rem" sx={{ mb: isNonMobile ? '1rem' : '3rem' }}>
                        <FlexInBetween alignItems={"center"} >

                            {user ?
                                // user info
                                <UserHeader user={user} />
                                :
                                <Box display={"flex"} justifyContent={'center'} alignItems={'center'} width={'100%'}>
                                    {
                                        isNonMobile && (
                                            <Logo flexDirection='column' hideTitle={false} />
                                        )
                                    }
                                </Box>}
                        </FlexInBetween>
                    </Box>
                    <Divider />

                    {/* drawer items */}
                    {user ? <LoggedDrawerItems user={user} /> : <List>
                        <ListItem sx={{ p: "0 10px" }}>
                            <OutLinedHoverBtn sx={{ width: '100%' }} component={Link} to="/login" endIcon={<LoginIcon />}>{lang.LOGIN_ENTRY}</OutLinedHoverBtn>
                        </ListItem>

                        <ListItem sx={{ p: "0 10px" }}>
                            <FilledHoverBtn sx={{ width: '100%' }} endIcon={<PersonAddAltIcon />} onClick={() => navigate('/signup')} >{lang.SIGNUP}</FilledHoverBtn>
                        </ListItem>
                    </List>

                    }

                </Box>
                {/* logout */}
                {user && <Box display="flex" alignItems="end" >
                    <ErrorBtn sx={{ mx: "10px", width: '100%' }} onClick={() => setShowModal(true)}>
                        <LogoutIcon />    {lang.LOGOUT}
                    </ErrorBtn>
                </Box>}

            </Drawer >

            <ModalControlled
                title={'هل انت متاكد من تسجيل الخروج ؟'}
                description={"dsd"}
                action={userLogout}
                isShowModal={isShowModal}
                close={() => setShowModal(false)} />
        </Box >
    );
}