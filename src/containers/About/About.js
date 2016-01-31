import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {
  render = () =>
    <div className="container">
      <h1>About Us</h1>
      <Helmet title="About Us"/>

      <p>This project was conceived and directed by Dr Rajiv Chandegra and made by Harmeet ____, Steve O'Connell, Claude Griffiths, Chris Emerson and Duncan MacKenzie at <a href="http://www.nhshackday.com/">NHS Hack Day 2016</a>.
      </p>
    </div>
  }
