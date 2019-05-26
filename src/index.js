import React, { Component } from 'react';
import { render } from 'react-dom';
import BusinessScreen from './BusinessScreen';
import GeneralScreen from './GeneralScreen';
import NavBar from './NavBar';
import SideBar from './SideBar';
import './style.css';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Screens = [
  { path: '/', component: BusinessScreen, name : 'Business News' },
  { path: '/GeneralScreen', component: GeneralScreen, name : 'General News' },
  /* { path: '/test2', component: HomeScreen, name : 'Home Screen3' },
  { path: '/test3', component: HomeScreen, name : 'Home Screen4' } */
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        {Screens.map(data => <Route path={data.path} exact component={data.component} />)}
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

