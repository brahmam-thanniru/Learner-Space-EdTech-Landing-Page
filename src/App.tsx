import "./App.css";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
