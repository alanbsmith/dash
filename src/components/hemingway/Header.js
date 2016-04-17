import React from 'react';

const Header = React.createClass({
  handleClick() {
    this.props.openModal();
  },

  render() {
    return(
      <div className="jumbotron">
        <div className="container-fluid">
          <div id="open-modal" className="btn" onClick={ this.handleClick }>+</div>
          <h1>Hemingway</h1>
          <p>A Dash companion for collecting and suggesting interesting reads.</p>
        </div>
      </div>
    )
  }
});

export default Header;
