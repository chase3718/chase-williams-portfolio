import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import './App.css'
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page-content">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
        <UnderConstruction />
      </div>
    </div>
  );
}

export default App;