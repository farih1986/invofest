import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../components/store/UseAuthStore";
import { Mic2, CalendarDays, LayoutDashboard, Home } from "lucide-react";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const menus = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
      path: "/dashboard",
    },
    {
      title: "Create Category",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard/category/create",
    },
    {
      title: "Create Speaker",
      icon: <Mic2 size={20} />,
      path: "/dashboard/speaker/create",
    },
    {
      title: "Create Event",
      icon: <CalendarDays size={20} />,
      path: "/dashboard/event/create",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex w-full min-h-screen">
      <div className="bg-slate-500 w-64 flex flex-col justify-between p-4">
        
        <div>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
            />
        </div>

        <div>
          <ul className="flex flex-col gap-4 w-full text-red-800">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.path}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 transition-all"
                >
                  {menu.icon}
                  <span>{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full p-4 bg-red-800 text-white font-semibold rounded-2xl cursor-pointer hover:bg-red-900 transition-all"
          >
            Logout
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="bg-slate-200 p-4 w-full">
        <Outlet />
      </div>
    </div>
  );
}