import React from 'react'
import ProtectedRoute from '../ProtectedRoute'
import UsersPage from '../../pages/admin/UsersPage'
import { user_roles } from '../constants/roles'
import ManageGetUSerPage from '../../pages/admin/ManageGetUserPage'
import AddUserPage from '../../components/user/actions/AddUserPage'

const userManageRoutes = [
    {
        path: '/management/users', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <UsersPage />
        </ProtectedRoute>
    },
    {
        path: '/management/users/user', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <ManageGetUSerPage />
        </ProtectedRoute>
    }, {
        path: '/management/users/add', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <AddUserPage />
        </ProtectedRoute>
    },
]

export default userManageRoutes
