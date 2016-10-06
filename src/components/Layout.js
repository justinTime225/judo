'use strict';

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Layout extends React.Component {
  componentWillMount() {
    console.log('LAYOUT!!!!!!')
    console.log('athletes', this.props.athletes[1]);
    console.log('test', this.props.test);
  }
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-judo-heroes.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
          </p>

          <p>
            Do you want to know more about Node.js and Universal JavaScript? <strong>Checkout <a href="https://nodejsdesignpatterns.com">Node.js Design Patterns</a></strong>.
          </p>

          <p>
            Built with <strong>❤</strong>︎ and <strong>code</strong> by <a href="http://loige.co" target="_blank">loige</a>.
            Contribute on <a href="https://github.com/lmammino/judo-heroes">GitHub</a> or
            read the tutorial on <a href="https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app">Scotch.io</a>
          </p>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    athletes: state.athletes,
    test: state.test
  }
}

export default connect(mapStateToProps)(Layout)
