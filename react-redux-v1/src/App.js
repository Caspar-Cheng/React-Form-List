import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import { About } from "./components/About";
import { Detail } from "./components/Detail"
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/todo" component={Todo} />
            <Route path="/about" component={About} />
            <Route path="/todo/:id" component={Detail} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
