import React, { Component } from 'react'
import Nevbar from './components/pages/Nevbar'
import Newscomponent from './components/pages/Newscomponent'
import {
  BrowserRouter ,Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Nevbar></Nevbar>
      <Routes>
        <Route path="/" element={<Newscomponent key="everything" pagesize={10} title={"Everything"} catogry="everything"></Newscomponent>}></Route>
        <Route path='/business' element={<Newscomponent key="business" pagesize={10} title={"Business"} catogry="business"></Newscomponent>}></Route>
        <Route path="/entertainment" element={<Newscomponent key="" pagesize={10} title={"Entertainment"} catogry="entertainment"></Newscomponent>}></Route>
        <Route path="/general" element={<Newscomponent key="entertainment" pagesize={10} title={"General"}catogry="general"></Newscomponent>}></Route>
        <Route path="/health" element={<Newscomponent key="health" pagesize={10} title={"Health"}catogry="health"></Newscomponent>}></Route>
        <Route path="/science" element={<Newscomponent key="science" pagesize={10}title={"Science"} catogry="science"></Newscomponent>}></Route>
        <Route path="/sports" element={<Newscomponent key="sports" pagesize={10} title={"Sports"} catogry="sports"></Newscomponent>}></Route>
        <Route path="/technology" element={<Newscomponent key="technology" pagesize={10} title={"Technology"} catogry="technology"></Newscomponent>}></Route>
      </Routes>
      </BrowserRouter>
    )
  }
}

