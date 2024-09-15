import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../../components/tools/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useLazyGetPaymentsQuery } from '../../toolkit/apiSlice'
import useLazyGetData from '../../hooks/useLazyGetData'
import { setPayments } from '../../toolkit/paymentSlice'
import ManagePayments from '../../components/payment/ManagePayments'
import LoaderSkeleton from '../../components/tools/LoaderSkeleton'
import Section from '../../style/mui/styled/Section'

export default function PaymentPage() {
  const dispatch = useDispatch()
  const { payments } = useSelector(s => s.paymentState)

  const [getData] = useLazyGetPaymentsQuery()
  const [getPayments] = useLazyGetData(getData)

  const trigger = async () => {
    const res = await getPayments()

    if (res) {
      dispatch(setPayments(res))
    }
  }

  useEffect(() => {
    if (!payments) {
      trigger()
    }
  }, [payments])

  if (!payments) return <LoaderSkeleton />
  return (
    <Section>
      <Header title={"الدفع $"} />
      <ManagePayments payments={payments} />
    </Section>
  )
}
