import LessonsExams from "../../components/exams/LessonExams"
import StartExam from "../../components/exams/StartExam"
import ExamsPage from "../../pages/client/ExamsPage"
import ProtectedRoute from "../ProtectedRoute"

const examRoutes = [
    {
        path: '/exams', element: <ProtectedRoute>
            <ExamsPage />
        </ProtectedRoute>
    }, {
        path: '/exams/:unitId', element: <ProtectedRoute>
            <LessonsExams />
        </ProtectedRoute>
    }, {
        path: '/exams/:unitId/:examId', element: <ProtectedRoute>
            <StartExam  />
        </ProtectedRoute>
    },
]

export default examRoutes