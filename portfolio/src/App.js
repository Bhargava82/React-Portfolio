import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
