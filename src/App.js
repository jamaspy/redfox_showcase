import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Customers, Dashboard } from "./components";
import { Header } from "./components/layout";
export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Header></Header>
      <Switch>
        {/* <PrivateRoute path="/" exact component={Home} />
        <Route path="/auth/" exact component={AuthCheck} />
        <PrivateRoute path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signup/details" exact component={Details} />
        <Route path="/signup/payment" exact component={Payment} />
        <Route path="/signup/subscription" exact component={Subscriptions} />
        <Route path="/signup/success" exact component={Success} />
        <PrivateRoute path="/stream/:id" component={Stream} />
        <Route path="/tc" exact component={TC} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/resetpassword" exact component={ResetPassword} />
        <Route path="/changepassword" exact component={ChangePassword} />
        <Route path="/verifyemail" component={EmailVerified} />
        <Route path="/resendverifyemail" exact component={ResendVerifyEmail} />
        <Route path="*" component={Error} /> */}
        <Route path="/customers/" exact component={Customers} />
        <Route path="/dashboard/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};
export default App;
