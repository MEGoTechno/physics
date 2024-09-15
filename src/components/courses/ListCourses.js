import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import React from 'react'
import Section from '../../style/mui/styled/Section'
import TitleWithDividers from '../ui/TitleWithDividers'
import TextBorderAround, { TextBorderWithIcons } from '../ui/TextBorderAround'
import CardHover from '../ui/CardHover'
import Grid from '../../style/vanilla/Grid'
import { FlexRow } from '../../style/mui/styled/Flexbox'

import { FaSchool } from "react-icons/fa";

function ListCourses() {
    const theme = useTheme()
    return (
        <Section>
            <TextBorderWithIcons 
            title='السنوات الدراسيه' 
            color={theme.palette.neutral[0]} 
            colorOne={theme.palette.primary.main}
            endIcon={<FaSchool size={'1.5rem'} />}
             />
            <Box>
                <Grid>
                    <CardHover img={'/images/grade1.webp'} title={'الصف الاول الثانوى'} desc={'كورسات و شروحات على كل درس'} />
                    <CardHover img={'/images/grade2.webp'} title={'الصف الثانى الثانوى'} desc={'كورسات و شروحات على كل درس'} />
                    <CardHover img={'/images/grade3.webp'} title={'الصف الثالث الثانوى'} desc={'كورسات و شروحات على كل درس'} />
                </Grid>
            </Box>
        </Section>
    ) 
}

export default ListCourses
