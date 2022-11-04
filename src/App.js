import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./output.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="content-per-page">
        <Header />
        <Switch>
          {/**home page route */}
          <Route exact path="/">
            <Main />
          </Route>
          {/**home page route */}

          {/**about page route */}
          <Route exact path="/about">
            <About />
          </Route>
          {/**about page route */}

          {/**pricing page route */}
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          {/**pricing page route */}

          {/**support page route */}
          <Route exact path="/support">
            <Support />
          </Route>
          {/**support page route */}

          {/* Register Page Route */}
          <Route exact path="/register">
            <Register />
          </Route>
          {/* Register Page Route */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
