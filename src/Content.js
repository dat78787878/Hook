import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
const Content = (props) => {
  return (
    <div>
        <h1>{props.home}</h1>
      <Item />
    </div>
  );
};

Content.propTypes = {
  home: PropTypes.string,
};

export default Content;
