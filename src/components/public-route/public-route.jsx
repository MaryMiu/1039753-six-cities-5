import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../store/selectors";
import {AuthorizationStatus} from "../../const";


const PublicRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => render(routeProps)}
      />
    );
  }

  return <Redirect to={`/`} />;
};

PublicRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PublicRoute};
export default connect(mapStateToProps)(PublicRoute);
