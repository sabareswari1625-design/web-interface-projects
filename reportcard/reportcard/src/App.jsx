import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import StudentCard from "./StudentCard";
import Marks from "./Marks";
import Result from "./Result";

import "./style.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentCard />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/result" element={<Result />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;