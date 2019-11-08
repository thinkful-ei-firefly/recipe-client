import React from 'react'

import GoodmealApiService from '../../services/goodmeal-api-service'
import UserContext from '../../contexts/UserContext'
import TokenService from '../../services/token-service'

import './RatingPopup.css'


class RatingPopup extends React.Component {

  static contextType = UserContext

  state = {
    rated: false
  }

  handleOpen = () => {
    document.getElementById("myRatingModal").style.display = "block"
  }

  handleClose = () => {
    document.getElementById("myRatingModal").style.display = "none"
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { value } = event.target.ratingSelector
    GoodmealApiService.submitRating(this.props.id, { rating: value })
      .then(() => {
        this.setState({ rated: value })
        this.handleClose()
      })
  }

  render() {
    const { rated } = this.state
    return (
      <div className='RatingPopup'>

        <button
          hidden={rated || !TokenService.hasAuthToken()}
          className='rate'
          onClick={e => this.handleOpen(this.props.id)}>
          <i className="fas fa-star">&nbsp;<span>Rate</span></i>
        </button>

        <p aria-live="polite" className='rated' hidden={!rated}>You gave this recipe {rated} stars</p>

        <div id="myRatingModal" className="modal">
          <div aria-live="polite" className="modal-content">
            <span onClick={this.handleClose} className="close">&times;</span>
            <form className='rate_form' onSubmit={e => this.handleSubmit(e)}>
              <legend>Rate This Recipe</legend>
              <br />
              <select name='ratingSelector' id='ratingSelector' defaultValue='5'>
                <option value="1">1 star</option>
                <option value="2">2 star</option>
                <option value="3">3 star</option>
                <option value="4">4 star</option>
                <option value="5">5 star</option>
              </select>

              <button className='rate-submit' type='submit'>Rate</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingPopup
