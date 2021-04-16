import React, { useState } from "react";
import PropTypes from "prop-types";
import "./backtop.css";

export const BackTop = ({ label, ...props }) => {
  const [up, setUp] = useState(false);
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setUp(true);
    } else {
      setUp(false);
    }
  };
  return (
    <button
      className={["storybook-backtop"].join(" ")}
      {...props}
      onClick={scrollUp}
      style={{
        display: up ? "block" : "none",
      }}
    >
      {label}
    </button>
  );
};

BackTop.propTypes = {
  label: PropTypes.string,
};

BackTop.defaultProps = {
  label: "Lên nào em!",
};
