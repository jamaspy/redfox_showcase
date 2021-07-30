import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import createBrowserHistory from "history/createBrowserHistory";
import { Customers, Dashboard } from "./components";
import { Login } from "./components/auth";
import { Header } from "./components/layout";
export const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/customers" exact component={Customers} />
          <Route path="/customers/:id" exact component={Customers} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
