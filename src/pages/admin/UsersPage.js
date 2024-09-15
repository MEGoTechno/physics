import React, { useEffect } from 'react'
import { Box } from '@mui/material';
import Header from '../../components/tools/Header';
import { useDispatch, useSelector } from 'react-redux';
import LoaderSkeleton from '../../components/tools/LoaderSkeleton';
import GetUsers from '../../components/user/GetUsers';
import useLazyGetData from '../../hooks/useLazyGetData';
import { setUsers } from '../../toolkit/usersSlice';
import Section from '../../style/mui/styled/Section';

export default function UsersPage() {
    const { lang } = useSelector(s => s.global)
    const dispatch = useDispatch()


    return (
        <Section>
            <Header title={lang.links.users} />
            <GetUsers />
        </Section >
    )
}
