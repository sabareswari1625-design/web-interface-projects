import Header from "./Header";
import Profile from "./Profile";
import About from "./About";
import Skill from "./Skill";
import Goal from "./Goal";
import Contact from "./Contact";
import Footer from "./Footer";
import "./Style.css";

function App() {

  const student = {
    name: "Sabareswari",
    role: "B.E CSE (Cybersecurity) Engineering Student",
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
    <div className="portfolio">

      <Header
        title="Student Portfolio"
        subtitle="Welcome to my digital space"
      />

      <Profile
        name={student.name}
        role={student.role}
        location={student.location}
      />

      <About
        description={about}
      />

      <Skill
        skills={skills}
      />

      <Goal
        objective={goal}
      />

      <Contact
        email={student.email}
        phone={student.phone}
      />

      <Footer
        message="Designed and developed using React"
      />

    </div>
  );
}

export default App;