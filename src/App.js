import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";
import NotFound from "./pages/not-found-404";
import "./styles/index.scss";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="header">Direct CSS/SCSS (CONs)</div>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
