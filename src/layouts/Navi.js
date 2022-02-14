import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Container, MenuItem, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const history = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    history("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
    history("/products");
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          
          <MenuItem name="Home" as={NavLink} to="/"/>

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn singOut={handleSignOut} />
            ) : (
              <SignedOut signOut={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
