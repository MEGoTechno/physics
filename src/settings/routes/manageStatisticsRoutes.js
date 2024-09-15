import React from 'react'
import ProtectedRoute from '../ProtectedRoute'
import { user_roles } from '../constants/roles'
import ManageStatisticsPage from '../../pages/admin/ManageStatisticsPage'
import UserStatistics from '../../components/statistics/UserStatistics'
import UserAttempt from '../../components/statistics/UserAttempt'
import ExamStatistics from '../../components/statistics/ExamStatistics'

const manageStatisticsRoutes = [
    {
        path: '/management/statistics', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <ManageStatisticsPage />
        </ProtectedRoute>
    },
    {
        path: '/management/statistics/user', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <UserStatistics />
        </ProtectedRoute>
    },
    {
        path: '/management/statistics/user/attempt', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <UserAttempt />
        </ProtectedRoute>
    },
    {
        path: '/management/statistics/exam', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <ExamStatistics />
        </ProtectedRoute>
    }
]

export default manageStatisticsRoutes
