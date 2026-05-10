import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import AuthLayouts from "./Layouts/AuthLayouts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import CreateCategory from "./pages/dashboard/categories/CreateCategory";
import CreateSpeaker from "./pages/dashboard/speaker/CreateSpeaker";
import CreateEvent from "./pages/dashboard/event/CreateEvent";

function App() {
  return  (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayouts />}> 
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/category/create" element={<CreateCategory />} />
          <Route path="/speaker/create" element={<CreateSpeaker />} />
          <Route path="/event/create" element={<CreateEvent />} />
        </Route>

        <Route element={<AuthLayouts />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;