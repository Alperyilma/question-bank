import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function SignedIn({ singOut }) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg"
        />
        <Dropdown>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={singOut}
              as={NavLink}
              to="/"
              text="Sign out"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
