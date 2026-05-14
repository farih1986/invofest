import { useAuthStore } from "../store/UseAuthStore";
import { Outlet,Navigate } from "react-router-dom";

export default function ProtectedRoute(){
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}