import { Box, Button, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { FilledHoverBtn, OutLinedHoverBtn, StyledBtn, SuccessBtn } from '../../style/buttonsStyles'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import Header from '../tools/Header'
import { useOutletContext } from 'react-router-dom'
import Separator from '../ui/Separator'
import Circuit from '../animations/Circuit'
import ImageBg from '../ui/ImageBg'
import Section from '../../style/mui/styled/Section'
import Image from '../ui/Image'


import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function NotLogged() {
    const { lang } = useSelector(s => s.global)
    const theme = useTheme()
    const [isNonMobile] = useOutletContext()
    const centerInfo = useMediaQuery("(max-width: 850px)")
    // console.log(theme)
    //"linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)"
    //'linear-gradient(to right, #fdc830, #f37335)'
    const mr = 'م'
    const mahmoud = 'أحمد'
    const elawadii = 'عادل'
    return (
        <Box position={'relative'} >
            <ImageBg img={'/images/bg-polygons.webp'}>

                <Section sx={{ mt: 0}}>

                    <Stack
                        direction={'row'}
                        justifyContent={'center'}
                        alignItems={'center'} flexWrap={'wrap'} minHeight={'100vh'} position={'relative'} sx={{
                            mt: '20px'
                        }} >

                        <Box
                            display={"flex"}
                            justifyContent={'center'}
                            alignItems={centerInfo ? 'center' : 'flex-start'}
                            flexDirection={'column'}
                            flex={1} minHeight={"300px"} maxWidth={"500px"} gap={'.7rem'} sx={{
                                animation: 'getIntoRt 1s ease', my: "40px"
                            }} >
                            <Box sx={{ position: 'relative' }} >

                                <Typography variant='banner' component={'h1'} sx={{ scale: isNonMobile ? '1.1' : '1', WebkitTextStroke: "2px  orange", color: 'transparent', opacity: '.2', position: 'absolute', left: 0, top: '-80px' }}  >
                                    الفيزيائى
                                </Typography>

                                <Typography variant='banner' component={'h1'} sx={{ scale: isNonMobile ? '1.1' : '1', WebkitTextStroke: "1px black", }}  >
                                    <span>{mr}</span>/ <span style={{ color: 'orange' }}>{mahmoud} </span> <span>{elawadii}</span>
                                </Typography>

                            </Box>

                            <Typography variant='h6' component={'h6'} lineHeight={'2.5rem'} mt={'-16px'} >
                                مدرس <span style={{ color: 'orange' }}>الفيزياء</span>  للمرحله الثانويه
                            </Typography>

                            <Separator sx={{ maxWidth: '300px' }} />
                            <Typography variant='subtitle1'><span style={{ color: 'orangered' }}>2025</span> مع الفيزيائى ليها طعم تانى </Typography>
                            <FilledHoverBtn sx={{ minWidth: '250px' }}>courses</FilledHoverBtn>

                            <Box display={'flex'} justifyContent={'space-around'} flexDirection={'row'} sx={{ minWidth: '250px' }}>
                                <IconButton>
                                    <FaFacebook style={{
                                        color: theme.palette.neutral[0],
                                    }} />
                                </IconButton>

                                <IconButton>
                                    <FaWhatsapp style={{
                                        color: theme.palette.neutral[0],
                                    }} />
                                </IconButton>

                                <IconButton>
                                    <FaYoutube style={{
                                        color: theme.palette.neutral[0],
                                    }} />
                                </IconButton>

                                <IconButton>
                                    <FaXTwitter style={{
                                        color: theme.palette.neutral[0],
                                    }} />
                                </IconButton>
                            </Box>

                        </Box>

                        <Box sx={{
                            pointerEvents: 'none', position: 'relative', animation: 'getIntoLt 1s ease'
                        }}>
                            <Box sx={{ maxWidth: '500px' }}>
                                <Image img={'/images/teacher-nobg.webp'} />
                            </Box>
                        </Box>

                    </Stack >
                </Section>

            </ImageBg>

        </Box>
    )
}
{/* <img src='/images/dna-temp.jpg' /> */ }
{/* <Box height={"800px"}></Box> */ }
{/* /https://www.youtube.com/watch?v=1NhC1zag-QI */ }
export default NotLogged
