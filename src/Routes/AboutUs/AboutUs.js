import React from 'react'

import './AboutUs.css'

class aboutUs extends React.Component{

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveStep(e.target.value)
  }

  render(){
    return (
      <section>
        <div className="left">
          <a className="lin" href=""><h2>Sam Walker <img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/></h2></a>
          <p>What you contributed</p>
          <a href="" className="link"><button className="portfolio">See More Work Here</button></a>
        </div>
        <hr/>
        <div className="right">
        <a className="lin" href="https://www.linkedin.com/in/gatesrichard/"><h2>Richard Gates<img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/></h2></a>
          <p>What you contributed</p>
          <a href="https://richarjgates-portfolio.now.sh/" className="link"><button className="portfolio">See More Work Here</button></a>
        </div>
        <hr/>
        <div className="left">
        <a className="lin" href=""><h2>Keith Prince <img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/></h2></a>
          <p>What you contributed</p>
          <a href="https://swordsagekeith.github.io/PortfolioSite/" className="link"><button className="portfolio">See More Work Here</button></a>
        </div>
        <hr/>
        <div className="right">
        <a className="lin" href=""><h2><img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/>Fabian Lema</h2></a>
          <p>What you contributed</p>
          <a href="" className="link"><button className="portfolio">See More Work Here</button></a>
        </div>
        <hr/>
        <div className="left">
       <a className="lin" href=""><h2>Hector Valles <img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/></h2></a>
          <p>What you contributed</p>
          <a href="" className="link"><button className="portfolio">See More Work Here</button></a>
        </div>
        <hr/>
      </section>
    )
  }
}

export default aboutUs;