import { Container, Paper } from "@mui/material";
import React from "react";
import "./Template.css";
import TemplateHeader from "../../Components/Header/TemplateHeader";
import TemplateHeading from "../../Components/Heading/TemplateHeading";
import { data } from "../Data/data";
import TemplateOneExperienceComponent from "../../Components/TemplateOneExperience/TemplateOneExperienceComponent";
import TemplateEducationComponent from "../../Components/TemplateEducation/TemplateEducationComponent";
import TemplateKeySkillComponent from "../../Components/TemplateKeySkill/TemplateKeySkillComponent";

const Template2 = (props) => {
  // console.log(
  //   props.personalinfo,
  //   props.workexperience,
  //   props.educationinfo,
  //   props.skills
  // );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  return (
    <Paper
      sx={{
        // height: "700px",
        // width: "600px"
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#2196f3"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeading color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"#9B536F"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />
        <TemplateHeading color={"#9B536F"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template2;
