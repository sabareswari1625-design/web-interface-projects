import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Goal from "./Goal";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {

  const student = {
    name: "Sabareswari",
    role: "B.E CSE (Cybersecurity) Student",
    email: "sabareswari@example.com",
    phone: "9876543210",
    location: "Chennai, India"
  };

  const about =
    "I am a cybersecurity engineering student passionate about ethical hacking, networking, web development and learning new technologies.";

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Java",
    "Networking",
    "Cybersecurity"
  ];

  const goal =
    "My goal is to become a cybersecurity professional and develop secure applications that help protect digital systems and information.";

  return (
    <BrowserRouter>

      <div className="app">

        <Header />

        <main>

          <Routes>

            <Route
              path="/"
              element={
                <Home
                  name={student.name}
                  role={student.role}
                  location={student.location}
                />
              }
            />

            <Route
              path="/about"
              element={
                <About
                  description={about}
                />
              }
            />

            <Route
              path="/skills"
              element={
                <Skill
                  skills={skills}
                />
              }
            />

            <Route
              path="/goal"
              element={
                <Goal
                  objective={goal}
                />
              }
            />

            <Route
              path="/contact"
              element={
                <Contact
                  email={student.email}
                  phone={student.phone}
                  location={student.location}
                />
              }
            />

            <Route
              path="*"
              element={
                <div className="not-found">
                  <div className="not-found-card">
                    <div className="error-number">404</div>
                    <h1>Page Not Found</h1>
                    <p>
                      The page you are looking for does not exist.
                    </p>
                  </div>
                </div>
              }
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;