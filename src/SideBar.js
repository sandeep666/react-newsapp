import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './HomeScreen';
import HomeScreen2 from './HomeScreen2';

export default class SideBar extends React.Component {
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
          <Row>
            <Col xs="3" style={{backgroundColor : 'black', height : window.innerHeight}}>.col</Col>
            <Col>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/homeScreen2" exact component={HomeScreen2} />
            </Col>
          </Row>
       
    );
  }
}