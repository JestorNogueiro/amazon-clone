// git remote add origin https://github.com/JestorNogueiro/amazon-clone.git

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import LogIn from "./components/LogIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/checkout" component={Checkout}>
            <Navbar />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
