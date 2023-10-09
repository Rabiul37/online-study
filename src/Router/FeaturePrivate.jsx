import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
const FeaturePrivate = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/Login"></Navigate>;
};

export default FeaturePrivate;
FeaturePrivate.propTypes = {
  children: PropTypes.node,
};
