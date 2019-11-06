import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <Link 
          to="/about" 
          className="foot">
          <i className="fas fa-users">
            <span>{ ' About Us' }</span>
          </i>
        </Link>
        <div className='vl'></div>
        <div className="foot"><i className="far fa-copyright"><span>2019 GoodMeal</span></i></div>
      </footer>
    );
  }
}

export default Footer;
