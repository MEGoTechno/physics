import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { navLinks } from '../../settings/navLinks'
import { useLocation, useNavigate } from 'react-router-dom'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

function LoggedDrawerItems({ user }) {
    const { pathname } = useLocation()
    const theme = useTheme()
    const [activeLink, setActiveLink] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        if (pathname) {
            const link = pathname.split("/")
            if (link[1] === "management") {
                setActiveLink(`/${link[1]}/${link[2]}`)
            } else {
                setActiveLink(`/${link[1]}`)
            }
        }
    }, [pathname])

    return (

        <List>
            {navLinks.map((link, i) => {

                if (!link.icon && link.allowedTo.includes(user?.role)) {
                    return (
                        <Box key={i} sx={{ display: "flex", justifyContent: "center", }}>
                            <Typography variant='h6' sx={{ mt: "2.25rem", mb: "1rem", opacity: ".8" }}>
                                {link.name}
                            </Typography>
                        </Box>
                    )
                }

                if (link?.allowedTo?.includes(user?.role)) {
                    return (
                        <ListItem key={i} sx={{ p: "0 10px" }}>
                            <ListItemButton onClick={() => {
                                navigate(link.to)
                                setActiveLink(link.to)
                            }}
                                sx={{
                                    backgroundColor:
                                        activeLink === link.to
                                            ? theme.palette.secondary.main
                                            : "transparent",
                                    color:
                                        activeLink === link.to
                                            ? theme.palette.text.active
                                            : theme.palette.text.primary,
                                    "&:hover": {
                                        backgroundColor: theme.palette.secondary[500],
                                        color: theme.palette.text.hover,
                                    }
                                }}
                            >
                                <ListItemIcon sx={{
                                    ml: "2rem",
                                    color: "inherit"
                                }}>
                                    {link.icon}
                                </ListItemIcon>

                                <ListItemText primary={link.name} />

                                <ChevronRightOutlinedIcon sx={{
                                    ml: "auto",
                                    display: activeLink === link.to ? "block" : "none",
                                }} />
                            </ListItemButton>
                        </ListItem>
                    )
                }
                return false
            })}
        </List>
    )
}

export default LoggedDrawerItems
