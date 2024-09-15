import CreateLecture from "../../components/content/manage/actions/CreateLecture"
import EditLecture from "../../components/content/manage/actions/EditLecture"
import EditName from "../../components/content/manage/actions/EditName"
import ManageLessons from "../../components/content/manage/ManageLessons"
import ManageLecturesPage from "../../pages/admin/ManageLecturesPage"
import { user_roles } from "../constants/roles"
import ProtectedRoute from "../ProtectedRoute"

const lectureManageRoutes = [
    {
        path: '/management/lectures', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <ManageLecturesPage />
        </ProtectedRoute>
    },
    {
        path: '/management/lectures/add', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <CreateLecture />
        </ProtectedRoute>
    },
    {
        path: '/management/lectures/edit', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <EditLecture />
        </ProtectedRoute>
    },
    {
        path: '/management/lectures/edit-name', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <EditName  />
        </ProtectedRoute>
    },
    {
        path: '/management/lectures/:unitId' , element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <ManageLessons  />
        </ProtectedRoute>
    },
]

export default lectureManageRoutes