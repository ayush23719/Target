import "semantic-ui-css/semantic.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Upload from "./pages/upload";
import Search from "./pages/search";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
