import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";


export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <NavLink to="/formulas">Formulas</NavLink>
      </Menu>
    </div>
  );
}
