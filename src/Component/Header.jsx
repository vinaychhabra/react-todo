import React from "react";
import Auth from "./Auth";

function Header() {
  return (
    <div className="header">
      <div>Todo List</div>
      <Auth />
    </div>
  );
}

export default Header;
