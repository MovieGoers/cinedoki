import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import MarkupPage from "./components/pages/MarkupPage";

import "./styles/global.scss";
import LoginPage from "./components/pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Markup" element={<MarkupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;