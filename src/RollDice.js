import React, { Component } from 'react'
import './RollDice.css'
import Dice from './Dice'

class RollDice extends Component {

  // Face numbers passes as default props 
  sidesText = ['one', 'two', 'three',
    'four', 'five', 'six']
  constructor(props) {
    super(props)
    this.state = {
      rolling: false,
      diceCount: 1,
      sideCount: 6,
      sides: ['one', 'two', 'three',
        'four', 'five', 'six']
    }
    this.roll = this.roll.bind(this)
  }
  roll() {

    this.setState({
      rolling: true
    })
    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)
  }

  handleChange(event) {
    this.setState({ diceCount: event.target.value });
  }

  handleSideChange(event) {
    this.setState({ sideCount: event.target.value });
  }

  handleClick() {
    let sidesValue = [];
    for (let i = 0; i < this.state.sideCount; i++) {
      sidesValue.push(this.sidesText[i]);
    }
    this.setState({ sides: sidesValue });
  }

  render() {
    const handleBtn = this.state.rolling ?
      'RollDice-rolling' : ''
    const { rolling } = this.state;
    const { sides } = this.state;
    const items = []
    if (sides.length > 0) {
      for (var i = 0; i < this.state.diceCount; i++) {
        items.push(<Dice key={i} face={sides[Math.floor(Math.random() * sides.length)]} rolling={rolling} />)
      }
    }
    return (
      <div className='RollDice'>
        <div class="rollDiceControl">
          <div class="form-control">
            <label>No.of Dice</label>
            <input type="number" min="1" value={this.state.diceCount} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div class="form-control">
            <label>No.of Sides</label>
            <input type="number" min="1" max="6" value={this.state.sideCount} onChange={this.handleSideChange.bind(this)}></input>
          </div>
          <button onClick={this.handleClick.bind(this)}>Update Dice</button>
        </div>
        <div className='RollDice-container'>
          {items}
        </div>
        <button className={handleBtn}
          disabled={this.state.rolling}
          onClick={this.roll}>
          {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
        </button>
      </div>
    )
  }
}

export default RollDice