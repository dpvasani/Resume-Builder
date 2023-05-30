import { Container, Paper } from "@mui/material";
import React from "react";
import "./Template.css";
import TemplateHeader from "../../Components/Header/TemplateHeader";
import TemplateHeading from "../../Components/Heading/TemplateHeading";
import TemplateOneExperienceComponent from "../../Components/TemplateOneExperience/TemplateOneExperienceComponent";
import { data } from "../Data/data";
import TemplateEducationComponent from "../../Components/TemplateEducation/TemplateEducationComponent";
import TemplateKeySkillComponent from "../../Components/TemplateKeySkill/TemplateKeySkillComponent";

const Template1 = (props) => {
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
  // console.log(props.index);
  return (
    <Paper
      sx={{
        // height: "700px",
        // width: "500px"
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
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
        primaryColor={"#C98A55"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeading color={"#C98A55"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"#C98A55"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />
        <TemplateHeading color={"#C98A55"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template1;
