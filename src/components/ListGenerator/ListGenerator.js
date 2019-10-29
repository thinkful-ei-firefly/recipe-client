import React from 'react'

import GoodmealApiService from '../../services/goodmeal-api-service'

import './ListGenerator.css'

class ListGenerator extends React.Component {
  
  state = {
    ingredientsToAdd: null,
    feedback: null,
    popUpArray: null,
    poppingUp: false
  }
  
  handleListCreate = async () => {
    const popUpArray = []
    const ingredientsToAdd = []
    let newIngs = []
    const { ingredients } = this.props.recipe
    ingredients.forEach(ing => {
      let ingArr = ing.split(' ')
      const num1 = ingArr.shift()
      const num2 = (ingArr[0].split('/').length === 2) ? ingArr.shift() : null
      const ingString = ingArr.join(' ')
      const numString = num2 ? [num1, num2].join(' ') : num1
      ingArr = [numString, ingString]
      newIngs.push(ingArr)
    })
    const myIngs = await GoodmealApiService.getIngredientList()
    newIngs.forEach(newIng => {
      let includes = false
      for(let i=0; i<myIngs.length; i++) {
        if (newIng[1].includes(myIngs[i].name)) {
          includes = true
          popUpArray.push([newIng, myIngs[i]])
          break
        }
      }
      if (!includes) {
        ingredientsToAdd.push(newIng)
      }
    })
    if (!!popUpArray.length) {
      this.handlePopUps(popUpArray)
    } else {
      this.createList()
    }
  }

  handlePopUps = async (popUps) => {
    const popUpArray = []
    const ingredientsToAdd = []
    popUps.forEach((popUp, i) => {
      const {amount, unit, name} = popUp[1]
      const newIng = popUp[0].join(' ')
      const handleYes = () => {
        ingredientsToAdd.push(popUp[0])
        popUp = ''
      }
      const handleNo = () => {
        popUp = ''
      }
      popUpArray.push(
        <li key={i}>
          {`You already own ${amount} ${unit} of ${name}. Add ${newIng} to your shopping list?`}
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </li>)
    })
    console.log(popUpArray)
    await this.setState({ popUpArray })
    const modal = document.getElementById("myModal");
    modal.style.display= "block"
  }

  createList = () => {

  }
    

  render() {
    return (
      <div className='ListGenerator'>
        <button onClick={this.handleListCreate}>Create shopping list</button>
        <div id="myModal" className="modal">
          <ul className='modal-content'>
            {this.state.popUpArray}
          </ul>
        </div>
        {this.state.popUpArray}
      </div>
    )
  }
}

export default ListGenerator
