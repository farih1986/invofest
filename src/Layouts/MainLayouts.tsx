import Header from "../components/header";
import { Outlet } from "react-router-dom";

export default function MainLayouts() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />

           <main className="max-w-7xl mx-auto py-6">
            <Outlet />
           </main>

           <footer className="p-4 bg-red-100 text-center">
                &copy; invofest 2024. All rights reserved.
           </footer>

        </div>
    );
}