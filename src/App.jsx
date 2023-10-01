import React, { useState } from "react";
import Header from "./components/header";

import Footer from "./components/footer";
import Main from "./components/Main";
import VideosList from "./components/videosList.jsx";
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <VideosList />
      <Footer />
    </div>
  );
};

export default App;
