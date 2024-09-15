import { Box } from '@mui/material'
import React from 'react'

function ImageBg({ img, sx, children }) {
    return (
        <Box sx={{
            backgroundPosition: 'top 35% right 0',
            backgroundImage: `url(${img})`,
            ...sx
        }}>
            {children}
        </Box>
    )
}

export default ImageBg
