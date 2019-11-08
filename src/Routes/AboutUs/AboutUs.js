import React from 'react'
import Button from '../../components/Button/Button'

import './AboutUs.css'
const linkedinLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"

class aboutUs extends React.Component {

  handleClick = e => {
    e.preventDefault()
    this.context.handleRemoveStep(e.target.value)
  }

  render() {
    return (
      <section>
        <div itemScope itemType="http://schema.org/Person" className="left">
          <a
            itemProp="contactPoint"
            className="lin"
            href="https://www.linkedin.com/in/sam-walker-25aba918b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 itemProp="name">
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
            <li>Performed rigorous testing and bug fixing</li>
          </ul>
          <a
            href="https://thinkful-ei-firefly.github.io/portfolio-sam/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="portfolio">See More Work Here</Button></a>
        </div>

        <hr />

        <div itemScope itemType="http://schema.org/Person" className="right">
          <a
            itemProp="contactPoint"
            href="https://www.linkedin.com/in/gatesrichard/"
            className="lin"
            target="_blank"
            rel="noopener noreferrer">
            <h2 itemProp="name">
              <img
                className="icon"
                alt="linkedin"
                src={linkedinLogo}>
              </img>
              Richard Gates
            </h2>
          </a>
          <p>Project Owner</p>
          <ul>
            <li>Managed user stories</li>
            <li>{'Login with Google (firebase), front/back end'}</li>
            <li>Created Add Recipe, and Private Recipes Route</li>
            <li>Designed and coded hamburger menu</li>
            <li>user, Recipe, and PublicRecipe Context</li>
            <li>Extensive user testing, and bug fixes</li>
          </ul>
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

        <hr />

        <div itemScope itemType="http://schema.org/Person" className="left">
          <a
            itemProp="contactPoint"
            className="lin"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 itemProp="name">
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
        <hr />

        <div itemScope itemType="http://schema.org/Person" className="right">
          <a
            itemProp="contactPoint"
            className="lin"
            href="https://www.linkedin.com/in/fabian-lema-79539250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 itemProp="name">
              <img
                className="icon"
                alt="linkedin"
                src={linkedinLogo}
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
            href="http://www.fabianlema.tech/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="portfolio">See More Work Here</Button>
          </a>
        </div>

        <hr />
        <div itemScope itemType="http://schema.org/Person" className="left">
          <a
            itemProp="contactPoint"
            className="lin"
            href="https://www.linkedin.com/in/hector-valles-web-developer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 itemProp="name">
              Hector Valles
              <img
                className="icon"
                alt="linkedin"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt4E7LHr3gH8nsPnHrCHrT0xiSALbTtl7XX-oJpBByTzR_zxV3"
              />
            </h2>
          </a>
          <p>Design Lead</p>
          <ul>
            <li>Created the look and feel of the project.</li>
            <li>Implemented the css for all pages.</li>
            <li>Ensured project was A11y compliant.</li>
            <li>Designed hero image as well as the logo.</li>
            <li>Ensured project was responsive to all screen sizes</li>
            <li>Performed some testing and bug fixing</li>
          </ul>
          <a
            href="https://hmvalles75.github.io/modern_portfolio/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="portfolio">See More Work Here</Button>
          </a>
        </div>
        <hr />
      </section>
    )
  }
}

export default aboutUs;