import "./TemplateKeySkillComponent.css";
import { Container } from "@mui/material";
import React from "react";

const TemplateKeySkillComponent = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default TemplateKeySkillComponent;
