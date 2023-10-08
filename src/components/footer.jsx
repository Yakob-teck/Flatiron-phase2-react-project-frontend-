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
  const socialMediaStyle = {
    display: "flex",
    gap: "10px",
  };

  return (
    <footer style={footerStyles}>
      <div className="container" style={containerStyles}>
        <div className="row">
          <div className="#about">
            <h3>About Us</h3>
            <hr />
          </div>
          <div className="">
            <h3>Contact Us</h3>
            <p>Email: Abby@moviesearchapp.com</p>
            <p>Social media:</p>
            <div stayle={socialMediaStyle}>
              <a href="https://www.facebook.com">
                <img src="facebook-icon.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com">
                <img src="twitter-icon.png" alt="Twitter" />
              </a>
              <p>Map</p>
              <p>Address: 68 MacEwan Street, Calgary, AB, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
