import "./TemplateOneExperienceComponent.css";
import React from "react";
import { Container } from "@mui/material";

const TemplateOneExperienceComponent = (props) => {
  return (
    <Container className="template-one-experience-comp">
      <li className="template-one-experience-comp">
        <h3 className="experience-heading">
          {props.experience.jobTitle}{" "}
          <span className="experience-org-name">
            {props.experience.organizationName}
          </span>
          <span className="experience-start-end">
            ({props.experience.startYear} - {props.experience.endYear})
          </span>
        </h3>
      </li>
    </Container>
  );
};

export default TemplateOneExperienceComponent;
