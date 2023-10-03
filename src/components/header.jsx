import React from "react";

const Header = () => {
  const headerStyles = {
    backgroundColor: "black",
    color: "rgb(225, 217, 239)",
    width: "auto",
    textAlign: "center",
    padding: "20px",
  };

  const navStyles = {
    marginTop: "10px",
  };

  const ulStyles = {
    listStyle: "none",
    padding: "0",
    display: "flex",
    justifyContent: "center",
  };

  const liStyles = {
    margin: "0 10px",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#646cff",
    fontWeight: "500",
  };

  return (
    <header style={headerStyles}>
      <h1>My Video Search</h1>
      <hr />
      <nav style={navStyles}>
        <ul style={ulStyles}>
          <li style={liStyles}>
            <a href="#someID1" style={linkStyles}>
              Home
            </a>
          </li>
          <li style={liStyles}>
            <a href="#someID2" style={linkStyles}>
              Videos
            </a>
          </li>
          <li style={liStyles}>
            <a href="#someID3" style={linkStyles}>
              TV-Shows
            </a>
          </li>
          <li style={liStyles}>
            <a href="col-md-6" style={linkStyles}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
