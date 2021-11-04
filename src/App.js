import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Appointment from './Pages/Appointment/Appoinment/Appoinment';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
