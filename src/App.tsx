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
        <Header/>
        <Switch>
        <Route path="/" exact component={ListProduct} />
        <Route path="/product/:id" exact component={HandleForm} />
        <Route component={Page404}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
