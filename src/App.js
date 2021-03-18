import Quotes from "./Components/Quotes";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/quotes">
          <Quotes></Quotes>
        </Route>
        <Route path="/create">
          <Create></Create>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
