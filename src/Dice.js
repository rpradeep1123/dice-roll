import React, { Component } from 'react'
import './Dice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

class Dice extends Component {
    render() {
        const { face, rolling } = this.props
        switch (face) {
            case 'one':
                return <FontAwesomeIcon icon={faDiceOne} className={`Die ${rolling && 'Die-shaking'}`} />
            case 'two':
                return <FontAwesomeIcon icon={faDiceTwo} className={`Die ${rolling && 'Die-shaking'}`} />
            case 'three':
                return <FontAwesomeIcon icon={faDiceThree} className={`Die ${rolling && 'Die-shaking'}`} />
            case 'four':
                return <FontAwesomeIcon icon={faDiceFour} className={`Die ${rolling && 'Die-shaking'}`} />
            case 'five':
                return <FontAwesomeIcon icon={faDiceFive} className={`Die ${rolling && 'Die-shaking'}`} />
            case 'six':
                return <FontAwesomeIcon icon={faDiceSix} className={`Die ${rolling && 'Die-shaking'}`} />
        }

    }
}

export default Dice
