import CreateExam from "../../components/exams/manage/actions/CreateExam"
import EditExam from "../../components/exams/manage/actions/EditExam"
import EditLesson from "../../components/exams/manage/actions/EditLesson"
import ManageLessonsExams from "../../components/exams/manage/ManageLessonsExams"
import ManageExamsPage from "../../pages/admin/ManageExamsPage"
import { user_roles } from "../constants/roles"
import ProtectedRoute from "../ProtectedRoute"

const examManageRoutes = [
    {
        path: '/management/exams', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <ManageExamsPage />
        </ProtectedRoute>
    }, {
        path: '/management/exams/add', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <CreateExam />
        </ProtectedRoute>
    }, {
        path: '/management/exams/edit', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <EditExam />
        </ProtectedRoute>
    }, {
        path: '/management/exams/edit-name', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <EditLesson />
        </ProtectedRoute>
    }, {
        path: '/management/exams/:unitId', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <ManageLessonsExams />
        </ProtectedRoute>
    },
]

export default examManageRoutes
