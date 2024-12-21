import React from "react";
import Navbar from "./components/Navbar";
import "./index.css"; // Import global styles

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <h1>Welcome to CampusConnect</h1>
        <p>Your campus community is just a click away!</p>
      </div>

      {/* Move "Click to Connect" outside content */}
      <div className="connect-btn-container">
        <button className="connect-btn">Click to Connect</button>
      </div>
    </div>
  );
};

export default App;
