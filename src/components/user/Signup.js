import { Box, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import MakeForm from '../tools/makeform/MakeForm'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import * as Yup from "yup"
import { useSignupMutation } from '../../toolkit/apis/UsersApi';
import usePostData from '../../hooks/usePostData';
import { useDispatch } from 'react-redux';
import { setUser } from '../../toolkit/globalSlice';


function Signup({ grades, groups }) {
    const dispatch = useDispatch()

    const [formOptions, setFormOptions] = useState({
        isLoading: false,
        isDone: false,
        values: null,
        getData: null
    })

    const [sendData] = useSignupMutation()
    const [sendSinup] = usePostData(sendData, formOptions, setFormOptions)

    // for get values and pass to modal
    const trigger = async (values, props) => {
        setFormOptions({
            ...formOptions, isLoading: true
        })
        const res = await sendSinup(values)
        dispatch(setUser(res))
    }

    const modifiedGrades = useMemo(() => grades?.map(grade => { return { value: grade?._id, label: grade?.gradeName, gradeId: grade._id } }), [grades])
    const modifiedGroups = useMemo(() => groups?.map(group => { return { value: group?._id, label: group?.groupName, grade: group.grade } }), [groups])

    const inputs = [

        {
            name: "name",
            label: "name",
            icon: <DriveFileRenameOutlineIcon />,
            variant: 'standard'
        },
        {
            name: 'email',
            label: 'email',
            icon: <DriveFileRenameOutlineIcon />,

        }, {
            name: 'phone',
            label: 'your phone',
            helperText: 'it will be used as userName'
        }, {
            name: 'familyPhone',
            label: 'family phone'
        }, {
            name: 'government',
            label: 'government'
        }, {
            name: "password",
            label: 'password',
            type: 'password',
            width: '40%'
        }, {
            name: "confirmPassword",
            label: 'confirm',
            type: 'password',
            width: '40%',

            validation: Yup
                .string()
                .required()
                .oneOf([Yup.ref('password')], 'Passwords must match')
        }, {
            name: "code",
            label: 'verification code',
        }, {
            name: "grade",
            label: "grade",
            type: "radio",
            options: modifiedGrades,
            validation: Yup.string().required("required")
        }, {
            name: "group",
            label: "group",
            type: "selectRef",
            ref: "grade",
            options: modifiedGroups,
            message: "choose grade please to choose group for that"
        },
    ]
    return (
        <Box display={"flex"} justifyContent={'space-around'} alignItems={"center"} flexWrap={'wrap'} width={'100%'} >

            <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} flex={1} maxWidth={'600px'}  >

                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"4px"} flexWrap={'nowrap'}>
                    <BorderColorIcon sx={{ color: "text.title" }} />

                    <Typography variant='h2'>create </Typography>

                    <Typography variant="h2" fontWeight="bold" sx={{
                        color: "text.title"
                    }}>
                        accont :-
                    </Typography>
                </Box>

                <MakeForm inputs={inputs} onSubmit={trigger} />
            </Box>

            <Box maxHeight={"100%"} >
                <img src='/images/test.webp' style={{ maxWidth: '350px', margin: 'auto' }} />
            </Box>
        </Box>
    )
}

export default Signup
