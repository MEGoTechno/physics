import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoaderSkeleton from '../../components/tools/LoaderSkeleton'
import { Box, Button } from '@mui/material'
import Header from '../../components/tools/Header'

import ManageGetUser from '../../components/user/ManageGetUser'
import useGetGrades from '../../hooks/useGetGrades'
import Section from '../../style/mui/styled/Section'

export default function ManageGetUSerPage() {

    const { lang } = useSelector(s => s.global)
    const [getGrades, grades] = useGetGrades()

    const trigger = async () => {
        try {
            await getGrades()

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!grades) {
            trigger()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [grades])


    if (!grades) {
        return <LoaderSkeleton />
    }


    return (
        <Section>
            <Header title={lang.links.manageUsers} />
            <ManageGetUser />
        </Section>
    )
}
