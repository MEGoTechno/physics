import LessonLectures from "../../components/content/LessonLectures"
import VidPage from "../../components/content/vid/VidPage"
import LessonsExams from "../../components/exams/LessonExams"
import StartExam from "../../components/exams/StartExam"
import ExamsPage from "../../pages/client/ExamsPage"
import LecturesPage from "../../pages/client/LecturesPage"
import ProtectedRoute from "../ProtectedRoute"

const lectureRoutes = [
    {
        path: '/lectures', element: <ProtectedRoute>
            <LecturesPage />
        </ProtectedRoute>
    }, {
        path: '/lectures/:unitId', element: <ProtectedRoute>
            <LessonLectures />
        </ProtectedRoute>
    }, {
        path: '/lectures/:unitId/:partId', element: <ProtectedRoute>
            <VidPage />
        </ProtectedRoute>
    },
]

export default lectureRoutes