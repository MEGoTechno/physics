import { Button, styled } from "@mui/material"

export const buttonStyle = (theme) => {
    return {
        textAlign: "center",
        width: 'fit-content',
        fontWeight: "700",
        margin: "6px 2px",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.grey[0],
        "&:hover": {
            backgroundColor: theme.palette.primary[600]
        },
        "&.Mui-disabled": {
            // background: "initial",
            color: "initial",
            opacity: .7
        }
    }
}

export const buttonError = (theme) => {
    return {
        width: 'fit-content',

        margin: "6px 2px",
        fontWeight: "600",
        color: theme.palette.grey[100],
        backgroundColor: theme.palette.error.main,
        "&:hover": {
            backgroundColor: theme.palette.error.light,
        }
    }
}

export const sendSuccess = (theme) => {
    return {
        textAlign: "center",
        width: 'fit-content',
        fontWeight: "700",
        margin: "6px 2px",
        backgroundColor: theme.palette.success.main,
        color: theme.palette.grey[0],
        "&:hover": {
            backgroundColor: theme.palette.success.dark,
        }
    }
}

export const outLinedHoverBtnStyle = (theme) => {
    return {
        textAlign: "center",
        width: 'fit-content',
        fontWeight: "700",
        margin: "6px 2px",
        backgroundColor: theme.palette.neutral[0],
        color: theme.palette.neutral[900],
        border: `1px solid transparent`,

        "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.neutral[0],
            border: `1px solid ${theme.palette.neutral[0]}`,

        }
    }
}

export const filledHover = (theme) => {
    return {
        textAlign: "center",
        width: 'fit-content',
        fontWeight: "700",
        backgroundColor: theme.palette.primary[500],
        color: theme.palette.grey[1000],
        border: `2px solid `,
        borderColor: theme.palette.neutral[500],
        borderRadius: '8px',
        transition: '.3s all ease',
        "&:hover": {
            backgroundColor: theme.palette.primary[500],
            color: theme.palette.grey[1000],
            borderColor: theme.palette.primary[500],
        }
    }
}


export const StyledBtn = styled(Button)(({ theme }) => (buttonStyle(theme)))
export const OutLinedHoverBtn = styled(Button)(({ theme }) => (outLinedHoverBtnStyle(theme)))
export const FilledHoverBtn = styled(Button)(({ theme }) => (filledHover(theme)))

export const ErrorBtn = styled(Button)(({ theme }) => (buttonError(theme)))

export const SuccessBtn = styled(Button)(({ theme }) => (sendSuccess(theme)))