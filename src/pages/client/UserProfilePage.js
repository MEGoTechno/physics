import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/tools/Header'
import { useSelector } from 'react-redux'
import UserProfile from '../../components/user/UserProfile'
import Section from '../../style/mui/styled/Section'

export default function UserProfilePage() {

  const { user } = useSelector(s => s.global)
  return (
    <Section>
      <Header title={"profile"} />
      <UserProfile user={user} />
    </Section>
  )
}
