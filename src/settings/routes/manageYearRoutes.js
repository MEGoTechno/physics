import React from 'react'
import ProtectedRoute from '../ProtectedRoute'
import ManageGroupsPage from '../../pages/admin/ManageGroupsPage'
import { user_roles } from '../constants/roles'
import CreateGroup from '../../components/groups/actions/CreateGroup'
import EditGroup from '../../components/groups/actions/EditGroup'
import CreateGrade from '../../components/groups/actions/CreateGrade'

const manageYearRoutes = [
    {
        path: '/management/years', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <ManageGroupsPage />
        </ProtectedRoute>
    }, {
        path: '/management/years/add', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <CreateGroup />
        </ProtectedRoute>
    }, {
        path: '/management/years/edit', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <EditGroup />
        </ProtectedRoute>
    }, {
        path: '/management/years/add-grade', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <CreateGrade />
        </ProtectedRoute>
    }
]

export default manageYearRoutes
