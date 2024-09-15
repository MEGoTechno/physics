import { Box, Typography } from '@mui/material'
import React from 'react'
import Circuit from '../animations/Circuit'
import { useOutletContext } from 'react-router-dom'
import { FlexBetween, FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'
import Section from '../../style/mui/styled/Section'
import TitleWithDividers from '../ui/TitleWithDividers'
import Battery from '../animations/Battery'
import Grid from '../../style/vanilla/Grid'
import Image from '../ui/Image'

import { GiNotebook } from "react-icons/gi";

function Services() {

    return (
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            <Box sx={{
                position: 'absolute', top: "200px", left: 0, width: '100%', overflow: 'hidden', height: "100%", zIndex: -1
            }}>
                <Circuit />
            </Box>

            <Section>
                <TitleWithDividers title={'تفتكر لى كل ده ؟'} />

                <FlexRow justifyContent={'center'} gap={'12px'}>
                    <Typography variant='h1' sx={{ textAlign: 'center', WebkitTextStroke: '2px orange', color: 'transparent' }}>علشانك</Typography>
                    <GiNotebook color='orange' size={'2.5rem'} />
                </FlexRow>

                <Grid>

                    <Box width={'100%'} position={'relative'} sx={{ maxWidth: '450px' }}>
                        <Battery delay='delay-1'>
                            <FlexColumn sx={{ zIndex: 3, position: 'relative', color: 'grey.1000' }}>
                                <Box sx={{
                                    width: '150px',
                                    borderRadius: '8px',
                                    p: '40px',
                                    backgroundImage: 'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M869.5 716.5Q750 933 528.5 883.5T185.5 667Q64 500 199.5 357T500 214q165 0 327 143t42.5 359.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M869.5 716.5Q750 933 528.5 883.5T185.5 667Q64 500 199.5 357T500 214q165 0 327 143t42.5 359.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");'
                                }}>
                                    <Image sx={{ width: '100%' }} img={'/images/battery-lump.webp'} />
                                </Box>
                                <Typography variant='subtitle1' mt={'-10px'}>
                                    <span style={{ color: 'red' }}>متابعه</span> على طول و <span style={{ color: 'red' }}>اسئله</span> جديده
                                </Typography>
                            </FlexColumn>
                        </Battery>
                    </Box>

                    <Box width={'100%'} position={'relative'} sx={{ maxWidth: '450px' }}>
                        <Battery delay='delay-4'>
                            <FlexColumn sx={{ zIndex: 3, position: 'relative', color: 'grey.1000' }}>
                                <Box sx={{
                                    width: '150px',
                                    borderRadius: '8px',
                                    mt: '10px', p: '40px',
                                    backgroundImage: 'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M869.5 716.5Q750 933 528.5 883.5T185.5 667Q64 500 199.5 357T500 214q165 0 327 143t42.5 359.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M869.5 716.5Q750 933 528.5 883.5T185.5 667Q64 500 199.5 357T500 214q165 0 327 143t42.5 359.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");'
                                }}>
                                    <Image sx={{ width: '100%' }} img={'/images/magnet.webp'} />
                                </Box>
                                <Typography variant='subtitle1'>
                                    شرح <span style={{ color: 'green' }}>ممتع</span> و باحدث <span style={{ color: 'green' }}>الطرق</span>
                                </Typography>
                            </FlexColumn>
                        </Battery>
                    </Box>

                    <Box width={'100%'} position={'relative'} sx={{ maxWidth: '450px' }}>
                        <Battery delay='delay-6'>
                            <FlexColumn sx={{ zIndex: 3, position: 'relative', color: 'grey.1000' }}>
                                <Box sx={{
                                    width: '150px',
                                    borderRadius: '8px',
                                    mt: '10px', p: '40px',
                                    backgroundImage: 'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M869.5 716.5Q750 933 528.5 883.5T185.5 667Q64 500 199.5 357T500 214q165 0 327 143t42.5 359.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M869.5 716.5Q750 933 528.5 883.5T185.5 667Q64 500 199.5 357T500 214q165 0 327 143t42.5 359.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");'
                                }}>
                                    <Image sx={{ width: '100%' }} img={'/images/nucleus.webp'} />

                                </Box>
                                <Typography variant='subtitle1'>
                                    يلا يا بطل <span style={{ color: 'purple' }}>شد حيلك</span> و ابدا <span style={{ color: 'purple' }}>معانا</span>
                                </Typography>
                            </FlexColumn>
                        </Battery>
                    </Box>
                </Grid>
            </Section>
        </Box>
    )
}

export default Services




//https://static.vecteezy.com/system/resources/thumbnails/016/337/944/small/albert-einstein-a-physician-known-as-the-father-of-relativity-won-nobel-prize-in-physics-1921-for-his-explanation-photoelectric-effect-free-png.png