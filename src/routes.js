import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Detalhes } from "./pages/Detalhes";
import { Header } from "./components/Header";
import { Err } from "./pages/Err";
import { Favoritos } from "./pages/Favoritos";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  );
}
