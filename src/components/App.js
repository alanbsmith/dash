import '../assets/stylesheets/base.scss';
import React from 'react';
import { Tabs } from 'react-bootstrap';

// components
import Hemingway from './Hemingway';

const App = React.createClass({
  render() {
    return(
      <div>
        <Hemingway/>
      </div>
    )
  }
});

export default App;
