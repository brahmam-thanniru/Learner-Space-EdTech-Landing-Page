import "./App.css";
import AboutUs from "./components/learner-space/AboutUs";
import Contact from "./components/learner-space/ContactUs";
import LearnerSpace from "./pages/LearnerSpace";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LearnerSpace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
