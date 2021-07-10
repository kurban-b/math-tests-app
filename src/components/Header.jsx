import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const name = useSelector((state) => state.name);

  return (
    <div className={"header"}>
      <div className="name">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Header;
