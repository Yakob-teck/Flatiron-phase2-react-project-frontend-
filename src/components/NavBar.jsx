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
      <h1>My Video Search</h1>
      <hr />
      <nav style={navStyles}>
        <ul style={ulStyles}>
          <li style={liStyles}>
            <a href="#Home" style={linkStyles}>
              Home
            </a>
          </li>
          <li style={liStyles}>
            <a href="#Videos" style={linkStyles}>
              Videos
            </a>
          </li>

          <li style={liStyles}>
            <a href="#About" style={linkStyles}>
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
