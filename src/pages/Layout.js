import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, useMediaQuery } from '@mui/material'
// import Header from "../components/header/Header"
import SideBar from '../components/header/SideBar'
import Navbar from '../components/header/Navbar'
import { useSelector } from 'react-redux'
import GlobalMsg from '../components/tools/GlobalMsg'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache'

export default function Layout() {

    const navigate = useNavigate()
    const [isOpenedSidebar, setSideBar] = useState(false)
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const { user } = useSelector(s => s.global)


    useEffect(() => {
        isNonMobile && user ? setSideBar(true) : setSideBar(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isNonMobile, user])

    const sideBarWidth = "250px"

    const cacheLtr = createCache({
        key: 'muiltr',
    })

    return (
        <Box width="100%" height="100%">
            <Box
                sx={{
                    width: isOpenedSidebar && isNonMobile ? `calc(100% - ${sideBarWidth})` : "100%",
                    mr: "auto",
                    transition: ".3s all ease",
                }}>

                <CacheProvider value={cacheLtr}>
                    <Navbar setSideBar={setSideBar} isOpenedSidebar={isOpenedSidebar} isNonMobile={isNonMobile} sideBarWidth={sideBarWidth} />
                    <SideBar isOpenedSidebar={isOpenedSidebar} setSideBar={setSideBar} isNonMobile={isNonMobile} sideBarWidth={sideBarWidth} />
                </CacheProvider>

                <Box>
                    {<Outlet context={[isNonMobile]} />}
                </Box>
            </Box>

            <GlobalMsg />
        </Box>
    )
}
// p: "0 32px",