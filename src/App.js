import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./Components/TopNav";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Products from "./Views/Products";
function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <TopNav />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Products />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
