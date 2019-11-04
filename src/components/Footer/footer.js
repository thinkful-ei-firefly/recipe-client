import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return(
      <section className="footer">
        <Link to="/about" className="foot">
          <i className="fas">
            <span>About The Makers</span>
          </i>
        </Link>
        <Link to="/"className="foot">
          <i className="fas fa-home">
            <span>Home</span>
          </i>
        </Link>
      </section>
    );
  }
}

export default Footer;
