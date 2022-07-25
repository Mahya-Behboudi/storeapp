import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Products from './components/Products';
import Aboutus from './components/Aboutus';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        
         <Switch>
            <Route path='/Products' component={Products} />
            <Route path ='/Aboutus' component={Aboutus}/>
            <Route path='/' component={Landing} />
         </Switch>
         {/* <Landing/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;