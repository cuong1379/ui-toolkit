import React from "react";
import PropTypes from "prop-types";
import "./alert.css";

export const Alert = ({
  type,
  label,
  backgroundColor,
  size,
  color,
  ...props
}) => {
  return (
    <div
      className={[
        "storybook-alert",
        `storybook-alert--${size}`,
        `storybook-alert--${type}`,
      ].join(" ")}
      style={(backgroundColor && { backgroundColor }, color && { color })}
      {...props}
    >
      {label}
    </div>
  );
};

Alert.propTypes = {
  label: PropTypes.string,

  backgroundColor: PropTypes.string,

  type: PropTypes.oneOf(["success", "info", "warning", "error"]),

  size: PropTypes.oneOf(["large", "small"]),

  color: PropTypes.string,
};

Alert.defaultProps = {
  backgroundColor: "green",
  type: "success",
  size: "large",
  color: "black",
};
