import React from 'react'
import { FlexInBetween } from '../tools/FlexInBetween'
import { Avatar, Box, IconButton, Typography, useTheme, useMediaQuery, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Logo({ flexDirection = "raw", hideTitle = true }) {

    const theme = useTheme()
    const isSmallScreen = useMediaQuery('(max-width:400px)');
    const { lang } = useSelector(s => s.global)
    const navigate = useNavigate()
   
    return (
        <Button onClick={() => navigate('/')}>
            <Box display={"flex"} justifyContent={'space-between'} alignItems={'center'} flexDirection={flexDirection}>
                <Avatar src="/images/nucleus.webp" sx={{
                    mr: 2,
                    height: "40px",
                    width: "40px",
                    bgcolor: 'transparent'
                    // bgcolor: theme.palette.secondary[500]
                }} />

                <Typography
                    variant="subtitle1"
                    noWrap
                    sx={{
                        display:
                            isSmallScreen && hideTitle ? 'none' : 'flex'
                        ,
                        fontWeight: 700,
                        letterSpacing: '.01rem',
                        color: theme.palette.neutral[0],
                        textDecoration: 'none',
                    }}
                >
                    {lang.logo}
                </Typography>
            </Box>
        </Button>
    )
}

export default Logo
