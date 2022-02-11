import React from 'react';
import { Dropdown, Menu, Image} from 'semantic-ui-react';

export default function SignedIn({singOut}) {
  return <div>
    <Menu.Item>
        <Image avatar spaced="right" src="https://blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg"/>
        <Dropdown pointing="top right" text='Alper'>
            <Dropdown.Menu>
                <Dropdown.Item text="Information" icon="info"/>

                <Dropdown.Item onClick={singOut} text="Sign out" icon="sign-out"/>
            </Dropdown.Menu>
            
        </Dropdown>
    </Menu.Item>


  </div>;
}
