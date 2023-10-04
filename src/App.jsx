import React from "react";
import Footer from "./components/footer";
import Main from "./components/Main";
import VideosList from "./components/videosList.jsx";
import NavBar from "./components/navBar";
const App = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <VideosList />
      <Footer />
    </div>
  );
};

export default App;
