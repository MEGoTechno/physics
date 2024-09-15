import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/tools/Header'
import Signup from '../../components/user/Signup'
import { useLazyGetGradesQuery, useLazyGetGroupsQuery } from '../../toolkit/apiSlice'
import LoaderSkeleton from '../../components/tools/LoaderSkeleton'
import Section from '../../style/mui/styled/Section'
import { FlexRow } from '../../style/mui/styled/Flexbox'
import BannerAuth from '../../components/ui/BannerAuth'
import { Box, Typography, Link as MuiLink, useTheme } from '@mui/material'
import { TextBorderWithIcons } from '../../components/ui/TextBorderAround'
import { lang } from '../../settings/constants/arlang'
import { FilledHoverBtn } from '../../style/buttonsStyles'

import { FaSquareWhatsapp } from "react-icons/fa6";
import Image from '../../components/ui/Image'

function SignupPage() {

    const { user } = useSelector(s => s.global)
    const navigate = useNavigate()

    // const [getGrades, { data: grades }] = useLazyGetGradesQuery()
    // const [getGroups, { data: groups }] = useLazyGetGroupsQuery()

    const theme = useTheme()
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user, navigate])

    // useEffect(() => {
    //     const trigger = async () => {
    //         if (!grades) {
    //             await getGrades()
    //         }
    //     }
    //     trigger()
    // }, [grades])

    // useEffect(() => {
    //     const trigger = async () => {
    //         if (!groups) {
    //             await getGroups()
    //         }
    //     }
    //     trigger()
    // }, [groups])

    // if (!grades || !groups) return <LoaderSkeleton />

    return (
        <Section sx={{ minHeight: '86vh' }}>

            <FlexRow height={'100%'} justifyContent={'space-evenly'}>

                {/* banner */}
                <BannerAuth title={'انشاء حساب'} img={'images/signup.webp'} />

                {/* Login form */}
                <Box sx={{
                    maxWidth: { xs: "400px", lg: '600px' }
                }}>
                    {/* login title */}
                    <FlexRow sx={{ justifyContent: 'center', }}>
                        <TextBorderWithIcons
                            title={'انشاء حساب'}
                            color={theme.palette.neutral[0]}
                            colorOne={theme.palette.primary.main}
                            endIcon={<Image width={'30px'} img={'/images/magnet-icon.webp'} />}
                        />
                    </FlexRow>

                    {/* login form */}
                    <Box sx={{}}>
                        <Box sx={{ width: '100%' }}>
                            <FilledHoverBtn sx={{ width: '100%' }} endIcon={<FaSquareWhatsapp color='green' size={'1.5rem'} />} > اذا كنت تريد الانضمام ، تواصل معنا . </FilledHoverBtn>
                    </Box>
                    <FlexRow gap={1} my={'1rem'}>
                        <Typography variant='body1'>
                             لديك حساب ؟
                        </Typography>
                        <MuiLink component={Link} to="/login" underline='hover' sx={{ cursor: 'pointer' }}> تسجيل الدخول الان !</MuiLink>
                    </FlexRow>
                </Box>

            </Box>
        </FlexRow>

            {/* form */ }
        </Section >
    )
}

export default SignupPage
