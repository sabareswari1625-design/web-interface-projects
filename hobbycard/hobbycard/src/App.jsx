import { createRoot } from "react-dom/client";
import Main from "./Main";
import "./Style.css";

function App() {
  return (
    <Main />
  );
}

createRoot(document.getElementById("root")).render(
  <App />
);