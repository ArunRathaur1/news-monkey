import React, { Component } from 'react'
import img from '../images/Hourglass.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={img} alt="this is loading"></img>
      </div>
    )
  }
}
