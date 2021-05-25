import React from "react";
import PropTypes from "prop-types";

export default function Profile({ check, children, handleName }) {
  const fullNameStyle = { color: "gold", fontFamily: "Arial Narrow Bold" };
  const professionStyle = { color: "goldenrod" };
  const bioStyle = {
    color: "white",
    fontFamily: "Trebuchet MS",
    boxShadow: "0 0 8px",
    marginTop: "10px",
    padding: "30px",
  };

  return (
    <div onLoad={handleName}>
      <div>{children}</div>
      <h1 style={fullNameStyle}>{check.fullName}</h1>
      <h2 style={professionStyle}>{check.profession}</h2>
      <h4 style={bioStyle}>{check.bio}</h4>
    </div>
  );
}

Profile.defaultProps = {
  check: {
    fullName: "User name",
    profession: "No profession is here",
    bio: "No bio is here",
  },
};

Profile.propTypes = {
  check: PropTypes.shape({
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
  }),
  handleName: PropTypes.func.isRequired,
};
