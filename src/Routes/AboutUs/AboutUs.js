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
        <div itemscope itemtype ="http://schema.org/Person" className="left">
          <a 
            itemprop="contactPoint"
            className="lin"
            href="https://www.linkedin.com/in/sam-walker-25aba918b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 itemprop="name">
              Sam Walker
              <img
                className="icon" 
                alt="linkedin" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"
              />
            </h2>
          </a>
          <p>Project Manager</p>
          <ul>
            <li>Created API endpoints on server</li>
            <li>Helped design and manage the postgreSQL database</li>
            <li>Coded AJAX requests for the client</li>
            <li>Designed several REACT routes, including the recipe and shopping list pages</li>
            <li>Implemented numerous features, including searching and rating recipes, and creating shopping lists from recipe cards.</li>
            <li>Performed rigourous testing and bug fixing</li>
          </ul>
          <a
            href="https://thinkful-ei-firefly.github.io/portfolio-sam/" 
            className="link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="portfolio">See More Work Here</Button></a>
        </div>
        
        <hr/>

        <div itemscope itemtype ="http://schema.org/Person" className="right">
          <a 
            itemprop="contactPoint"
            href="https://www.linkedin.com/in/gatesrichard/"
            className="lin"
            target="_blank" 
            rel="noopener noreferrer">
            <h2 itemprop="name">
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

        <div itemscope itemtype ="http://schema.org/Person" className="left">
          <a 
            itemprop="contactPoint" 
            className="lin" 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h2 itemprop="name">
              Keith Prince 
              <img 
                className="icon" 
                alt="linkedin" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"
              />
            </h2>
          </a>
          <p>What you contributed</p>
          <a 
            href="https://swordsagekeith.github.io/PortfolioSite/" 
            className="link" target="_blank" rel="noopener noreferrer"
          >
            <Button className="portfolio">See More Work Here</Button>
          </a>
        </div>
        <hr/>
<
        <div itemscope itemtype ="http://schema.org/Person" className="right">
          <a 
            itemprop="contactPoint"
            className="lin" 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h2 itemprop="name">
              <img 
                className="icon" 
                alt="linkedin" 
                src= { linkedinLogo }
              />
              Fabian Lema
            </h2>
          </a>
          <p>Full Stack Developer</p>
          <ul>
            <li>Managed Facebook API to login</li>
            <li>Configured and Managed AWS S3 to store images</li>
            <li>Collaborated with creating API endpoints</li>
            <li>Fixed front-end and back-end bug</li>
            <li>Tested server endpoints using Mocha, Chai, and supertest</li>
          </ul>
          <a 
            href="" 
            className="link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="portfolio">See More Work Here</Button>
          </a>
        </div>

        <hr/>
        <div itemscope itemtype ="http://schema.org/Person" className="left">
          <a 
            itemprop="contactPoint" 
            className="lin" 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h2 itemprop="name">
              Hector Valles 
              <img 
                className="icon" 
                alt="linkedin" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"
              />
            </h2>
          </a>
          <p>What you contributed</p>
          <a 
            href="" 
            className="link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="portfolio">See More Work Here</Button>
          </a>
        </div>
        <hr/>
      </section>
    )
  }
}

export default aboutUs;