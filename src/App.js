import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home1 from "./Components/SideNavTools/Home1";
import Muni from "./Components/SideNavTools/Muni";
import Ram from "./Components/SideNavTools/Ram";
import Vijay from "./Components/SideNavTools/Vijay";
import Das from "./Components/SideNavTools/Das";
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch>
          <Route path="/" exact>
            <Home1 />
          </Route>
          <Route path="/ToDo App">
            <Muni />
          </Route>
          <Route path="/Ram">
            <Ram />
          </Route>
          <Route path="/Vijay">
            <Vijay />
          </Route>
          <Route path="/Das">
            <Das />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
