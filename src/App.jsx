import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Menu from "./pages/Menu";
import Pagenotfount from "./pages/Pagenotfount";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<Contactus />} />
          <Route path="*" element={<Pagenotfount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
