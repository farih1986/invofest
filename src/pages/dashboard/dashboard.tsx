import { Link } from "react-router-dom";
import {
  CalendarDays,
  Mic2,
  LayoutDashboard,

} from "lucide-react";

export default function Dashboard() {
  const menus = [
    {
      title: "Create Speaker",
      description: "Tambah speaker baru",
      icon: <Mic2 size={28} />,
      path: "/Speaker/create",
    },
    {
      title: "Create Event",
      description: "Tambah event baru",
      icon: <CalendarDays size={28} />,
      path: "/Event/create",
    },
    {
      title: "Create Category",
      description: "Tambah kategori baru",
      icon: <LayoutDashboard size={28} />,
      path: "/Category/create",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-600">
              Kelola semua halaman form dari sini
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className="bg-slate-200 rounded-2xl shadow-md p-6 border border-gray-200 "
            >
              <div className="mb-4 text-red-900">
                {menu.icon}
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {menu.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {menu.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}