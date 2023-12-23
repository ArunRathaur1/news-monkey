import React, { Component } from 'react'
import Nevbar from './components/pages/Nevbar'
import Newscomponent from './components/pages/Newscomponent'
export default class App extends Component {
  render() {
    return (
      <div>
        <Nevbar></Nevbar>
        <Newscomponent></Newscomponent>
      </div>
    )
  }
}

