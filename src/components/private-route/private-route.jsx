import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../store/selectors";
import {AuthorizationStatus, AppRoute} from "../../const";


const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => render(routeProps)}
      />
    );
  }

  return <Redirect to={AppRoute.LOGIN} />;
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
