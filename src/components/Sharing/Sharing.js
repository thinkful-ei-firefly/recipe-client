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
    const mailContent = `Hey, %0D%0A I wanted to share this recipe I found online using Good Meal. %0D%0A https://good-meal-client.herokuapp.com/publicrecipes/${id}`
    window.open(`mailto:?subject=New ${name} recipe &body=${mailContent}`);
  }

  render() {
    const recipe = this.props.recipe
    return (
      <div className='share'>
      <span>Share</span>
          <nav>
            <button type='button' onClick={e => this.shareFacebook(recipe.id)}>Share on Facebook</button>
            <button type='button' onClick={e => this.shareTwitter(recipe.id)}>Share on Twitter</button>
            <button type='button' onClick={e => this.shareMail(e, recipe.id, recipe.name)}>Share by email</button>
        </nav>
      </div>
    )
  }
}

export default Sharing
