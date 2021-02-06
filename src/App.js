import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
