import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Section from '../../style/mui/styled/Section'
import { FlexRow } from '../../style/mui/styled/Flexbox'
import BannerAuth from '../../components/ui/BannerAuth'
import { Box, Typography, Link as MuiLink, useTheme } from '@mui/material'
import { TextBorderWithIcons } from '../../components/ui/TextBorderAround'
import LoginForm from '../../components/auth/LoginForm'

import { lang } from '../../settings/constants/arlang'
import { MdOutlineLogin } from "react-icons/md";

export default function LoginPage() {

  const { user } = useSelector(s => s.global)
  const theme = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <Section sx={{ minHeight: '86vh' }}>

      <FlexRow height={'100%'} justifyContent={'space-evenly'}>

        {/* banner */}
        <BannerAuth title={lang.LOGIN_ENTRY} img={'images/login.webp'} />

        {/* Login form */}
        <Box sx={{
          maxWidth: { xs: "400px", lg: '600px' }
        }}>
          {/* login title */}
          <FlexRow sx={{ justifyContent: 'center', my: '2rem' }}>

            <TextBorderWithIcons
              title={lang.LOGIN_ENTRY}
              color={theme.palette.neutral[0]}
              colorOne={theme.palette.primary.main}
              endIcon={<MdOutlineLogin size={'1.5rem'} />}
            />

          </FlexRow>

          {/* login form */}
          <Box sx={{}}>
            <LoginForm />
            <FlexRow gap={1}>
              <Typography variant='body1'>
                ليس لديك حساب ؟
              </Typography>
              <MuiLink component={Link} to="/signup" underline='hover' sx={{ cursor: 'pointer' }}>انشئ حساب الان !</MuiLink>
            </FlexRow>
          </Box>

        </Box>
      </FlexRow>

      {/* form */}
    </Section >
  )
}
