import "./TemplateEducationComponent.css";
import React from "react";

const TemplateEducationCompnent = (props) => {
  return (
    <h3 className="template-education-details">
      {props.education.degree} in {props.education.domain}{" "}
      <span className="template-education-university">
        {props.education.university}
      </span>
      <span className="education-start-end">
        ({props.education.startYear} - {props.education.endYear})
      </span>
    </h3>
  );
};

export default TemplateEducationCompnent;
