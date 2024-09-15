import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Header({ title, description, icon }) {
    const theme = useTheme()
    const { lang } = useSelector(s => s.global)
    const navigate = useNavigate()

    const titleSplitted = title.split(' ')
    return (
        <Box display="flex" flexDirection="column" m="10px 0"  >
            <Divider sx={{ borderWidth: "4px", borderRadius: "6px", width: '180px', bgcolor: theme.palette.secondary.main }} />
            <Divider sx={{ borderWidth: "4px", borderRadius: "6px", width: '90px', mt: '6px', bgcolor: theme.palette.secondary.main }} />

            <Box display={'flex'} gap={1}>

                {titleSplitted && titleSplitted.map((splitted, i) => (
                    <Typography key={i} variant="h2" fontWeight="bold" sx={{
                        color: i === 0 ? theme.palette.neutral[0] : theme.palette.text.title, my: 1,
                    }}>
                        {splitted}
                    </Typography>
                ))}

                {icon && icon}
            </Box>

            {description &&
                <Typography variant="h6" m='5px'>
                    {description}
                </Typography>
            }
            <Divider sx={{ borderWidth: "8px", borderRadius: "6px"}} />
        </Box>
    )
}
