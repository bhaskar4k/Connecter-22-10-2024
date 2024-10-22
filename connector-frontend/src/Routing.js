import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
