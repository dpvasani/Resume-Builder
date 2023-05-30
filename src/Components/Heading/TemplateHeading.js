import React from "react";
import "./TemplateHeading.css";

const TemplateHeading = (props) => {
  return (
    <div>
      <h2
        style={{ color: props.color }}
        className="professional-experience-heading">
        {props.title}
      </h2>
      <hr style={{ backgroundColor: props.color }} className="vertical-line" />
    </div>
  );
};

export default TemplateHeading;
