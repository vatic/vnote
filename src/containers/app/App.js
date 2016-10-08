import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    //dispatch(fetchTopReposIfNeeded(page));
  }
  render() {
    return (
      <div className="App container">
        <div className="row controls">
          <div className="controls-left col-md-4">
            <span className="glyphicon glyphicon-tags"></span>
          </div>
          <div className="controls-right col-md-8"></div>
        </div>
        {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

App.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return {
    notes: notes ? notes.list : null,
  };
};

export default connect(
  mapStateToProps
)(App);
