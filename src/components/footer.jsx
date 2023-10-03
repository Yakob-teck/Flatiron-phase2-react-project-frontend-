import React from "react";

const Footer = () => {
  const footerStyles = {
    backgroundColor: "#2768a2",
    color: "rgb(225, 217, 239)",
    width: "auto",
    textAlign: "center",
    padding: "20px",
  };

  const containerStyles = {
    backgroundColor: "#2768a2",
  };

  return (
    <footer style={footerStyles}>
      <div className="container" style={containerStyles}>
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <hr />
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: Abby@moviesearchapp.com</p>
            <p>Social media:</p>
            <p>Map</p>
            <p>Address: 68 MacEwan Street, Calgary, AB, Canada</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
