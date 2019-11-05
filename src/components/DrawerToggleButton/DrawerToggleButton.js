import React from 'react';
import UserContext from '../../contexts/UserContext';

import './drawerToggleButton.css';

class DrawerToggleButton extends React.Component {
  
  static contextType = UserContext;
  
  handleClick = e => {
    e.preventDefault()
    this.context.sideDrawerIsOpen
    ? this.context.handleCloseSideDrawer()
    : this.context.handleOpenSideDrawer()
  }
  
  render() {
    return(
      <section 
        className="drawer-toggle-button"
        onClick={ this.handleClick }>
        <i className="fas fa-bars"></i>
      </section>
    )
  }
}

export default DrawerToggleButton