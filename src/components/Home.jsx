import React from "react";

function Home(props) {
  const greetingStyle = {
    color: "blue",
    fontSize: "32px",
    borderBottom: "4px solid blue",
  };
  return <div style={greetingStyle}>{props.greeting}</div>;
}

export default Home;
