import React from 'react'

import './Sharing.css'

class Sharing extends React.Component {

  shareFacebook = (id) => {
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=https://good-meal-client.herokuapp.com/publicrecipes/' + id, 'facebook-popup', 'height=350,width=600');
    if(facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }

  shareTwitter = (id) => {
    var twitterWindow = window.open('https://twitter.com/share?url=https://good-meal-client.herokuapp.com/publicrecipes/' + id, 'twitter-popup', 'height=350,width=600');
    if(twitterWindow.focus) {
      twitterWindow.focus();
    }
    return false;
  }

  shareMail = (e, id, name) => {
    e.preventDefault()
    console.log(e.target.email.value);
    const mailTo = e.target.email.value;
    const mailContent = `Hello,%0D%0A%0D%0AHow to prepare ${name}:%0D%0A%0D%0ATo view the details please click the following link: https://good-meal-client.herokuapp.com/publicrecipes/${id}`
    window.open(`mailto:${mailTo}?subject=Check this amazing recipe&body=${mailContent}`);
  }

  render() {
    const recipe = this.props.recipe
    return (
      <div>
        <div className='share'>
          <span>Share</span>
          <div className='container'>
            <button className='share_button' type='button' onClick={e => this.shareFacebook(recipe.id)}><i class="fab fa-facebook-f"></i></button>
            <button className='share_button' type='button' onClick={e => this.shareTwitter(recipe.id)}><i class="fab fa-twitter"></i></button>
          </div>
        
        <form onSubmit={e => this.shareMail(e, recipe.id, recipe.name)}>
          <button type="submit"><i class="far fa-envelope"></i></button>
          <label htmlFor="email">Email to:<input textholder="Email" type="email" required id="email" name="email"/></label>
        </form>
        </div>    
      </div>
    )
  }
}

export default Sharing
