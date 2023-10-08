import React from "react";

const NavBar = () => {
  const headerStyles = {
    backgroundColor: "#333",
    color: "rgb(225, 217, 239)",
    display: "flex",
    margintop: "10px",
    width: "auto",
    alignItems: "center",
    padding: "20px",
  };

  const navStyles = {
    marginLeft: "auto",
  };

  const ulStyles = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  };
  const liStyles = {
    margin: "0 10px",
    textAlign: "center",
  };
  const linkStyles = {
    textDecoration: "none",
    color: "#646cff",
    fontWeight: "800",
    fontSize: "24px",
    gap: "2rem",
    transition: "color 0.3s ease-in-out",
  };

  return (
    <header style={headerStyles}>
      <h1>My Video Streaming</h1>
      <hr />
    </header>
  );
};

export default NavBar;
