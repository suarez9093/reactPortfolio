// import React from 'react';
// import { flexContainer, phone, linkIcons, square, projectLinks, navbar } from "./css/navbar.module.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"


// function NavbarComponent() {

//   return (
//     <nav className={navbar}>
//       <ul>
//         <li><a className={projectLinks} href="https://github.com/suarez9093">
//           <FontAwesomeIcon icon={faGithubSquare} className={linkIcons} />
//         </a></li>
//         <li><a className={projectLinks} href="https://www.linkedin.com/in/alexsuarez9093/">
//           <FontAwesomeIcon icon={faLinkedin} className={`${linkIcons} ${square}`} />
//         </a></li>
//         <li><a className={projectLinks} href="mailto:suarez9093@hotmail.com">
//           <FontAwesomeIcon icon={faEnvelope} className={linkIcons} />
//         </a></li>
//         <li><a className={projectLinks} href="tel:720-240-6833">
//           <FontAwesomeIcon icon={faMobileAlt}  id={phone} className={linkIcons} />
//         </a></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavbarComponent;

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;