import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import { Screens } from './index.js'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar sticky="top" color="dark" dark expand="md">
        <NavbarBrand><Link to="/">Home</Link></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {Screens.map(data => {
              return <NavItem>
                <NavLink style={{margin : 12}} to={data.path}>{data.name}</NavLink>
              </NavItem>
            })}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}