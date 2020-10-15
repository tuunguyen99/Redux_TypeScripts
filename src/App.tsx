import * as React from "react";
import HandleForm from "./components/HandleForm";
import Header from "./containers/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProduct from "./components/ListProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page404 from "./containers/Page404";


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ListProduct}>
          </Route>
          <Route path="/1/:id" component={HandleForm}>
          </Route>
          <Route path='/' component={Page404}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
