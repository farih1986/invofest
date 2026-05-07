import { Outlet } from "react-router-dom";

export default function AuthLayouts() {
    return (
        <div className="bg-white min-h-screen w-full grid grid-cols-2 items-center">
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
                <img
                    src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                    alt="Text Image"
                    className="w-96"
                />
                <p>Invofest</p>
            </div>

            <div className="p-30">
                <Outlet />
            </div>
        </div>
    );
}