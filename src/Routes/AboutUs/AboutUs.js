import React from 'react'
import Button from '../../components/Button/Button'

import './AboutUs.css'
const linkedinLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"

class aboutUs extends React.Component{

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveStep(e.target.value)
  }

  render(){
    return (
      <section>
        <div className="left">
          <a className="lin" href="" target="_blank" rel="noopener noreferrer"><h2>Sam Walker <img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/></h2></a>
          <p>What you contributed</p>
          <a href="" className="link" target="_blank" rel="noopener noreferrer"><Button className="portfolio">See More Work Here</Button></a>
        </div>
        
        <hr/>

        <div className="right">
          <a 
            href="https://www.linkedin.com/in/gatesrichard/"
            className="lin"
            target="_blank" 
            rel="noopener noreferrer">
            <h2>
              <img 
                className="icon" 
                alt="linkedin" 
                src={ linkedinLogo }>
              </img>
              Richard Gates
            </h2>
          </a>
          <p>Project Owner</p>
          <a 
            href="https://richardjgates-portfolio.now.sh/"
            className="link"
            target="_blank"
            rel="noopener noreferrer">
            <Button 
              className="portfolio">
              See More Work Here
            </Button>
          </a>
        </div>

        <hr/>

        <div className="left">
        <a className="lin" href="" target="_blank" rel="noopener noreferrer"><h2>Keith Prince <img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/></h2></a>
          <p>What you contributed</p>
          <a href="https://swordsagekeith.github.io/PortfolioSite/" className="link" target="_blank" rel="noopener noreferrer"><Button className="portfolio">See More Work Here</Button></a>
        </div>
        <hr/>
        <div className="right">
        <a className="lin" href="" target="_blank" rel="noopener noreferrer"><h2><img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/>Fabian Lema</h2></a>
          <p>What you contributed</p>
          <a href="" className="link" target="_blank" rel="noopener noreferrer"><Button className="portfolio">See More Work Here</Button></a>
        </div>
        <hr/>
        <div className="left">
       <a className="lin" href="" target="_blank" rel="noopener noreferrer"><h2>Hector Valles <img className="icon" alt="linkedin" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"/></h2></a>
          <p>What you contributed</p>
          <a href="" className="link" target="_blank" rel="noopener noreferrer"><Button className="portfolio">See More Work Here</Button></a>
        </div>
        <hr/>
      </section>
    )
  }
}

export default aboutUs;