import React from "react";

export default function Header() {
  return (
    <header className="App-header">
        <img src={require("../images/icons8-world-64.png")} className="App-logo" alt="logo" /> &nbsp;
        <p>
            my travel journal.
        </p>
    </header>
  );
}