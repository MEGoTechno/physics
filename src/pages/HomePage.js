import { Avatar, Box, Paper, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/tools/Header'
import { user_roles } from '../settings/constants/roles'
// import AdminHome from '../components/home/AdminHome'
import UserHome from '../components/home/UserHome'
import NotLogged from '../components/home/NotLogged'
import AboutUS from '../components/home/AboutUS'
import ListCourses from '../components/courses/ListCourses'
import Services from '../components/home/Services'
import Einstein from '../components/home/Einstein'
import Section from '../style/mui/styled/Section'
import TitleWithDividers from '../components/ui/TitleWithDividers'
import UserHeader from '../components/ui/UserHeader'

export default function HomePage() {

    const { user } = useSelector(s => s.global)

    if (!user) return <Box>
        <NotLogged />
        <AboutUS />
        <Services />
        <Einstein />
        <ListCourses />
    </Box>

    if (user.role === user_roles.ADMIN) return (
        <Section>
            <TitleWithDividers title={"مرحبا " + user.name} />
            <UserHeader user={user} />
            {/* <AdminHome /> */}
        </Section>
    )

    return (
        <Section>
            <Header title={"الصفحه الرئيسيه"} />
            <UserHome />
        </Section>
    )
}
