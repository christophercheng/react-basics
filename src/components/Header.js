import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';

import logo from './../logo.svg';


const RouterDropDown1 = withRouter(
  ({ history }) => <CompositionDropDown history={history} />,
);

class CompositionDropDown extends Component {
  onChange = (event) => {
    this.props.history.push(`/${event.target.value}`);
  };

  render = () => (
    <select
      onChange={this.onChange}
      defaultValue=""
    >
      <option value="" />
      <option value="Composition1">MurderDogRobot Composition via Copying</option>
      <option value="Composition2">Label Composition via Containers</option>
    </select>
  );
}

class CompositionDropDown2 extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  };

  onChange = (event) => {
    this.props.history.push(`/${event.target.value}`);
  };

  render = () => (
    <select
      onChange={this.onChange}
      defaultValue=""
    >
      {this.props.children}
    </select>
  );
}

const RouterDropDown2 = props => (
  <Route render={({ history }) => <CompositionDropDown2 history={history} {...props} />} />
);

const Header = () => (
  <div>
    <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" />
      React Basics
    </h1>
    <RouterDropDown1 />
    <RouterDropDown2>
      <option value="" />
      <option value="Composition1">MurderDogRobot Composition via Copying</option>
      <option value="Composition2">Label Composition via Containers</option>
    </RouterDropDown2>
  </div>
);

export default Header;

