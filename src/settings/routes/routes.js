import HomePage from "../../pages/HomePage";
import ProtectedRoute from "../ProtectedRoute";

import Layout from "../../pages/Layout"
import NotFound from "../../components/tools/NotFound";
import LoginPage from "../../pages/client/LoginPage";
import SignupPage from "../../pages/client/SignupPage";
import ExamsPage from "../../pages/client/ExamsPage";
import UsersPage from '../../pages/admin/UsersPage';
import examRoutes from "./examRoutes";
import examManageRoutes from "./examManageRoutes";
import NotFoundPage from "../../components/ui/errors/NotFoundPage";
import UserProfilePage from "../../pages/client/UserProfilePage";
import UpdateUserProfile from "../../components/user/actions/UpdateUserProfile";
import lectureRoutes from "./lectureRoutes";
import paymentManageRoutes from "./paymentManageRoutes";
import userManageRoutes from "./userManageRoutes";
import manageYearRoutes from "./manageYearRoutes";
import lectureManageRoutes from "./lectureManageRoutes";
import manageStatisticsRoutes from "./manageStatisticsRoutes";


export const routes = [
    {
        path: "/", element: <Layout />,
        children: [
            {
                index: true, element: <HomePage />
            }, {
                path: '/login', element: <LoginPage />
            }, {
                path: '/signup', element: <SignupPage />
            }, {
                path: '/profile', element: <ProtectedRoute>
                    <UserProfilePage />
                </ProtectedRoute>
            }, {
                path: '/profile/update', element: <ProtectedRoute>
                    <UpdateUserProfile />
                </ProtectedRoute>
            }, {
                path: '/lectures', children: lectureRoutes
            }, {
                path: '/exams', children: examRoutes
            }, {
                path: '/management/exams', children: examManageRoutes
            }, {
                path: '/management/lectures', children: lectureManageRoutes
            }, {
                path: '/management/users', children: userManageRoutes
            }, {
                path: '/management/payments', children: paymentManageRoutes
            },{
                path: '/management/years', children: manageYearRoutes
            }, {
            },{
                path: '/management/statistics', children: manageStatisticsRoutes
            }, {
                path: '*', element: <NotFoundPage />
            }
        ]
    },
]