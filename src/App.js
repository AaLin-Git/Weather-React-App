import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity='Amsterdam' />
        <footer>
          <p className="GitHub-link">
                <a
                    href="https://github.com/AaLin-Git/Weather-React-App"
                    target="_blank"
                    rel="noreferrer"
                    >Open-source code 
                    </a> by Alona Kovalchuk
          </p>
        </footer>
      </div>
    </div>
  );
}
