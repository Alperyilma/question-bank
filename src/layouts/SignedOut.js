import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function SignedOut() {
  return (
    <div>
      <Menu.Item>
        <Button as={NavLink} to="/login" gey>
          Login
        </Button>
        <Button
          as={NavLink}
          to="/register"
          primary
          style={{ marginLeft: "0.5em" }}
        >
          Register
        </Button>
      </Menu.Item>
    </div>
  );
}
