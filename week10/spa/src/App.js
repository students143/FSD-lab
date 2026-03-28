import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: "blue", padding: "10px" }}>
        <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
        <Link to="/profile" style={{ color: "white", margin: "10px" }}>Profile</Link>
        <Link to="/contact" style={{ color: "white", margin: "10px" }}>Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;