import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { About } from "./components/About";
import Detail from "./components/Detail";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/about" component={About} />
            <Route path="/todo/:id" component={Detail} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
