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