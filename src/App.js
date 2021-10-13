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
              <NewsDiv country="in" category="all" key="all" />
            </Route>
            <Route exact path="/national">
              <Navbar active="national"/>
              <NewsDiv country="in" category="national" key="national" />
            </Route>
            <Route exact path="/business">
              <Navbar active="business"/>
              <NewsDiv country="in" category="business" key="business" />
            </Route>
            <Route exact path="/entertainment">
              <Navbar active="entertainment"/>
              <NewsDiv country="in" category="entertainment" key="entertainment" />
            </Route>
            <Route exact path="/world">
              <Navbar active="world"/>
              <NewsDiv country="in" category="world" key="world" />
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

            <Route exact path="/politics">
              <Navbar active="politics"/>
              <NewsDiv country="in" category="politics" key="politics" />
            </Route>
            <Route exact path="/startup">
              <Navbar active="startup"/>
              <NewsDiv country="in" category="startup" key="startup" />
            </Route>
            <Route exact path="/automobile">
              <Navbar active="automobile"/>
              <NewsDiv country="in" category="automobile" key="automobile" />
            </Route>
            <Route exact path="/miscellaneous">
              <Navbar active="miscellaneous"/>
              <NewsDiv country="in" category="miscellaneous" key="miscellaneous" />
            </Route>
            <Route exact path="/hatke">
              <Navbar active="hatke"/>
              <NewsDiv country="in" category="hatke" key="hatke" />
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
