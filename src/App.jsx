import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link
import Footer from "./components/Footer";
import Main from "./components/Main";
import VideosList from "./components/videosList";
import NavBar from "./components/navBar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

const App = () => {
  const greeting = "Welcome to My Video Stream Website!";

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link to="/about">
                {" "}
                <h3>About Us</h3>
              </Link>
            </li>
          </ul>
        </nav>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home greeting={greeting} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Main />
        <VideosList />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
