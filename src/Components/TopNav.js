import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <Link to="/" className="font-bold">
        <span className="font-bold">React App</span>
      </Link>
      <Navigation />
    </header>
  );
}

export default TopNav;
