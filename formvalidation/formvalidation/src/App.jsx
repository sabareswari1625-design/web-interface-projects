import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormValidation from "./FormValidation";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home / Registration Page */}
        <Route path="/" element={<FormValidation />} />

        {/* React Router Registration Route */}
        <Route
          path="/registration"
          element={<FormValidation />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;