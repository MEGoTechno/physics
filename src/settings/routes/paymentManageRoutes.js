import CreatePayment from "../../components/payment/actions/CreatePayment"
import PaymentPage from "../../pages/admin/PaymentPage"
import { user_roles } from "../constants/roles"
import ProtectedRoute from "../ProtectedRoute"

const paymentManageRoutes = [
    {
        path: '/management/payments', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <PaymentPage />
        </ProtectedRoute>
    }, {
        path: '/management/payments/add', element: <ProtectedRoute allowedTo={[user_roles.ADMIN, user_roles.SUBADMIN]}>
            <CreatePayment />
        </ProtectedRoute>
    },
]

export default paymentManageRoutes