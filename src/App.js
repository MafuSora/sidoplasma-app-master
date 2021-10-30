import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer';
import React from 'react';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Menu1 from './components/PMI/PMI_Menu _1'
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';



function App() {
  return (
    <div Classname="App" >
      <div className="backg">
        <Router>
          <Navbar/>
            <main>
              <Switch>
                <Route path="/" exact>
                  <Login />
                  {/* <Gerbong/> */}
                </Route>
                
                <Route path="/gerbong">
                  <Menu1/>
                </Route>
                <Route path="/berita">
                  
                </Route>
                <Redirect to="/"/>
              </Switch>
            </main>
            <Footer></Footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
