import React from 'react'

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
      <div className='share'>
      <span>Share</span>
          <nav>
            <button type='button' onClick={e => this.shareFacebook(recipe.id)}>Share on Facebook</button>
            <button type='button' onClick={e => this.shareTwitter(recipe.id)}>Share on Twitter</button>
            <form onSubmit={e => this.shareMail(e, recipe.id, recipe.name)}>
              <label htmlFor="email">Email to:<input textholder="Email" type="email" required id="email" name="email"/></label>
              <button type="submit">Share by email</button>
            </form>
        </nav>
      </div>
    )
  }
}

export default Sharing
