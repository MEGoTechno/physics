import React from 'react'
import Section from '../../style/mui/styled/Section'
import { FlexBetween, FlexRow } from '../../style/mui/styled/Flexbox'
import { Box, Typography } from '@mui/material'
import Image from '../ui/Image'

import { TbProgressCheck } from "react-icons/tb";

function Einstein() {
    return (
        <Section sx={{ maxWidth: '800px', bgcolor: 'cyan', mx: 'auto', borderRadius: '16px', color: 'grey.1000' }}>
            <FlexBetween>
                <Box>
                    <Typography variant='h5' >هتعمل معانا اى ؟</Typography>
                    <Box>
                        <FlexRow gap={'.2rem'}>
                            <TbProgressCheck style={{ color: 'green', width: '1.5rem', height: '1.5rem' }} />
                            <Typography variant='subtitle1' maxWidth={'400px'}>
                                فيديوهات حل الواجبات
                            </Typography>
                        </FlexRow>

                        <FlexRow gap={'.2rem'}>
                            <TbProgressCheck style={{ color: 'green', width: '1.5rem', height: '1.5rem' }} />
                            <Typography variant='subtitle1' maxWidth={'400px'}>
                                واجبات لكل درس
                            </Typography>
                        </FlexRow>
                        <FlexRow gap={'.2rem'}>
                            <TbProgressCheck style={{ color: 'green', width: '1.5rem', height: '1.5rem' }} />
                            <Typography variant='subtitle1' maxWidth={'400px'}>
                                تقييم دوري للأداء
                            </Typography>
                        </FlexRow>
                    </Box>
                </Box>
                <Box>
                    <Image img={'https://static.vecteezy.com/system/resources/thumbnails/016/337/944/small/albert-einstein-a-physician-known-as-the-father-of-relativity-won-nobel-prize-in-physics-1921-for-his-explanation-photoelectric-effect-free-png.png'} />
                </Box>
            </FlexBetween>
        </Section>
    )
}

export default Einstein
