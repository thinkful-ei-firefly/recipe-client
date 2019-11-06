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
      <div className='btn_wrap'>
        <span>Share <i className="fas fa-share-alt"></i></span>
        <div className='container'>
          <button className='share_button' type='button' onClick={e => this.shareFacebook(recipe.id)}><i className="share_icon fab fa-facebook-f"></i></button>
          <button className='share_button' type='button' onClick={e => this.shareTwitter(recipe.id)}><i className="share_icon fab fa-twitter"></i></button>
          <button className='share_button' type='button' onClick={e => this.shareMail(e, recipe.id, recipe.name)}><i className="share_icon far fa-envelope"></i></button>     
        </div>
      </div>
    )
  }
}

export default Sharing
