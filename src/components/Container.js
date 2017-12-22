import React from 'react';
import {
  Route,
} from 'react-router-dom';
import Composition1 from './Composition1';
import Composition2 from './Composition2';

const Home = () => (
  <h2>Make a selection. Please</h2>
);

const Container = () => (
  <div id="component-container">
    <Route path="/" exact component={Home} />
    <Route path="/Composition1" component={Composition1} />
    <Route path="/Composition2" component={Composition2} />
  </div>
);

export default Container;

