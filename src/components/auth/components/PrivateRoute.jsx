import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  children,
  token,
  errors,
  component: Component,
  isAuthenticated,
  logout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return token !== "" ? (
          <Component logout={logout} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  token: state.users.authToken,
  errors: state.users.user_details_errors,
});
// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatchClearErrors: () => dispatch(clearErrors()),
//   };
// };

export default connect(mapStateToProps)(PrivateRoute);
