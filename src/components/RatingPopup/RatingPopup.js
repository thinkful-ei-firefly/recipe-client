import React from 'react'

import '../../services/goodmeal-api-service'

import './RatingPopup.css'
import GoodmealApiService from '../../services/goodmeal-api-service'

class RatingPopup extends React.Component {

  state = {
    rated: false
  }

  handleOpen = () => {
    document.getElementById("myModal").style.display = "block"
  }

  handleClose = () => {
    document.getElementById("myModal").style.display = "none"
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { value } = event.target.ratingSelector
    GoodmealApiService.submitRating(this.props.id, {rating: value})
      .then(() => {
        this.setState({ rated: value })
        this.handleClose()
      })
  }

  render() {
    const { rated } = this.state
    return (
      <div className='RatingPopup'>
        
<<<<<<< HEAD
        <button hidden={rated} className='rate' onClick = {e =>this.handleOpen(this.props.id)}>
        <i class="fas fa-star">&nbsp;<span>Rate</span></i>
=======
        <button 
          hidden={ rated } 
          className='rate=recipe' 
          onClick={ e =>this.handleOpen(this.props.id) }>
          Rate
>>>>>>> 0a59ae5463299db4111e8a350deb51e535034fed
        </button>

        <p hidden={!rated}>You gave this recipe {rated} stars</p>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span onClick = {this.handleClose}className="close">&times;</span>
            <form onSubmit={e => this.handleSubmit(e)}>
              <legend>Rate this recipe</legend>
              <select name='ratingSelector' id='ratingSelector' defaultValue='5'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label htmlFor='ratingSelector'>stars</label>
              <button type='submit'>Rate</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingPopup
