import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsDiv from './components/NewsDiv';
import Footer from './components/Footer';
import About from './components/ContactUs';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <div>

         <Router>
          <Switch>
            <Route exact path="/">
              <Navbar active="home"/>
              <NewsDiv country="in" category="" key="general" />
            </Route>
            <Route exact path="/general">
              <Navbar active="general"/>
              <NewsDiv country="in" category="general" key="General" />
            </Route>
            <Route exact path="/business">
              <Navbar active="business"/>
              <NewsDiv country="in" category="business" key="business" />
            </Route>
            <Route exact path="/entertainment">
              <Navbar active="entertainment"/>
              <NewsDiv country="in" category="entertainment" key="entertainment" />
            </Route>
            <Route exact path="/health">
              <Navbar active="health"/>
              <NewsDiv country="in" category="health" key="health" />
            </Route>
            <Route exact path="/science">
              <Navbar active="science"/>
              <NewsDiv country="in" category="science" key="science" />
            </Route>
            <Route path="/sports">
              <Navbar active="sports"/>
              <NewsDiv country="in" category="sports" key="sports" />
            </Route>
            <Route exact path="/technology">
              <Navbar active="technology"/>
              <NewsDiv country="in" category="technology" key="technology" />
            </Route>
            <Route exact path="/aboutus">
              <Navbar active="aboutus"/>
              <About key="about" category="aboutUs"/>
            </Route> 
          </Switch>

          
          <Footer />
        </Router> 


      </div>
    )
  }
}

export default App;
