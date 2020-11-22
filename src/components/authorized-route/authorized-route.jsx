import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../store/selectors";
import {AuthorizationStatus} from "../../const";


const AuthorizedRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.NO_AUTH
            ? render(routeProps)
            : <Redirect to={`/`} />
        );
      }}
    />
  );
};

AuthorizedRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {AuthorizedRoute};
export default connect(mapStateToProps)(AuthorizedRoute);
