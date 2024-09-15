import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NotFoundPage from '../components/ui/errors/NotFoundPage'

function ProtectedRoute({ children, allowedTo = [] }) {

    const user = useSelector(s => s.global.user)

    // if (allowedTo === 'all' && user) return children
    if (allowedTo.length > 0 && !allowedTo?.includes(user?.role)) { return <NotFoundPage /> }

    if (user) return children
}

export default ProtectedRoute
