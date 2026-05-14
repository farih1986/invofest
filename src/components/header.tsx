import { Home, TrophyIcon,UserSquare,ComputerIcon,MicIcon, UserCircle2, LayoutDashboard }from "lucide-react";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {

    const menuItems = [
        { label: "Beranda", href: "/", icon: <Home size={18} /> },
        { label: "Competition", href: "Competition", icon: <TrophyIcon size={18} /> },
        { label: "Seminar", href: "Seminar", icon: <UserSquare size={18} /> },
        { label: "Workshop", href: "Workshop", icon: <ComputerIcon size={18} /> },
        { label: "Talkshow", href: "Talkshow", icon: <MicIcon size={18} /> },
        { label: "Login", href: "Login", icon: <UserCircle2 size={18} /> },
    ];
    const activeStyle = "text-red-900";
    const defaultStyle = "text-slate-600 hover:text-red-900";
    return (
    <header className=" bg-white shadow-sm px-6 py-2">
    <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="logo">
            <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="logo"
            className="h-16"
            />
        </div>
        <div className="nav flex gap-2">
            {menuItems.map((item) => (
                <NavLink to={item.href} className={({ isActive }) => `flex items-center gap-2 px-4 py-2 font-medium transition-all
                    duration-200 ${
                    isActive ? activeStyle : defaultStyle
                    }`}>
                    {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                    <span>{item.label}</span>
                </NavLink>
                ))}
        </div>
    </div>
 </header>
);
};
export default Header;