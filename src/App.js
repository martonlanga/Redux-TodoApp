import React, { Component } from 'react';
import { connect } from 'react-redux';

import {simpleAction} from './actions/simpleAction';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: (msg) => dispatch(simpleAction(msg))
});

class App extends Component {

  simpleAction = (msg) => {
    this.props.simpleAction(msg);
  };

  render() {
    return (
     <div>
       <button onClick={() => this.simpleAction('heey')}>
         Test redux action
       </button>
       <pre>
         {
           JSON.stringify(this.props)
         }
       </pre>
     </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
