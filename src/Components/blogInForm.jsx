import React from "react";
const BlogInForm = (props) => {
  return (
    <React.Fragment>
      <span
        style={{ margin: 3 + "px" }}
        className="bagge badge-pill badge-info"
      >
        {props.tag}
      </span>
    </React.Fragment>
  );
};

export default BlogInForm;
