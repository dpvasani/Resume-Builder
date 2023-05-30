import "./Styles/MyResumes.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import JsPDF from "jspdf";
import Grid from "@mui/material/Grid";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { connect } from "react-redux";
import { templates } from "../Utils/Data/templates";
import { Navbar, BlackScreen } from "./";
import {
  addAllExperience,
  addEducation,
  addPersonalInfo,
  editSkill,
  selectResume,
  selectTemplate,
} from "../Redux/Actions/actions";

//in this page we are storing the details in the local storage in JSON format (key,value) so that after creating Resume we can retrieve them.

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

//mapStateToProps is used for selecting the part of the data from the store that the connected component needs
// mapDispatchToProps allows you to specify which actions your component might need to dispatch

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  setSelectedResumeId: (id) => dispatch(selectResume(id)),
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
  onAddEducation: (details) => dispatch(addEducation(details)),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
});

const MyResumes = (props) => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const newResumes = window.localStorage.getItem("resumes")
      ? JSON.parse(window.localStorage.getItem("resumes"))
      : [];

    setResumes(newResumes);
  }, []);

  const navigate = useNavigate();

  const getTemplate = (resume, index) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.template_id
    );
    // console.log("resume",resume)
    // console.log("template", template);

    const TemplateComp = React.cloneElement(template.template, {
      personalinfo: resume.personalInfo,
      workexperience: resume.experiences,
      educationinfo: resume.educationInfo,
      skills: resume.skills,
      key: resume.id,
      index: index,
    });

    return TemplateComp;
  };

  //delete resume
  const deleteResume = (resume) => {
    let resumes = window.localStorage.getItem("resumes");

    let newResumes = JSON.parse(resumes);
    const newSetOfResumes = newResumes.filter((eachResume) => {
      return eachResume.id !== resume.id;
    });

    window.localStorage.setItem("resumes", JSON.stringify(newSetOfResumes));
    setResumes(newSetOfResumes);
  };

  const downloadResume = (id) => {
    // console.log(id);
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.getElementById(`${id}report`)).then(() => {
      report.save(`resume.pdf`);
      // console.log(resumes)
    });
  };

  const setUserData = (resume) => {
    // console.log(resume);
    //set personal info

    props.onAddPersonalInfo(resume.personalInfo);

    //set work experience

    props.setAllExperience(resume.experiences);

    //set education info

    props.onAddEducation(resume.educationInfo);

    //set skills

    props.onEditSkill(resume.skills);
  };

  const navigateToFillDetails = (resume) => {
    props.setSelectedTemplateId(resume.template_id);
    props.setSelectedResumeId(resume.id);
    setUserData(resume);
    navigate("/template/fill-details");
  };

  // console.log(resumes);
  return (
    <>
      <Navbar active={"My Resumes"} />
      <div className="my-resumes">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="grid"
          >
            {resumes.length >= 1 ? (
              resumes.map((resume, index) => {
                return (
                  <Grid
                    item
                    className={`resume `}
                    id={`${index}resume`}
                    margin={2}
                    key={index}
                  >
                    <Item id={`${index}ITEM`}>
                      {getTemplate(resume, index)}
                      <BlackScreen />
                      <div className="use-template-btn-cont">
                        <Button
                          className="use-template-btn"
                          onClick={() => {
                            downloadResume(index);
                          }}
                          size="medium"
                          variant="contained"
                        >
                          Download
                        </Button>
                        <Button
                          className="use-template-btn"
                          onClick={() => {
                            deleteResume(resume);
                          }}
                          size="medium"
                          variant="contained"
                        >
                          Delete
                        </Button>
                        <Button
                          className="use-template-btn"
                          onClick={() => navigateToFillDetails(resume)}
                          size="medium"
                          variant="contained"
                        >
                          Edit Template
                        </Button>
                      </div>
                    </Item>
                  </Grid>
                );
              })
            ) : (
              <div className="no-resumes-container">
                <SentimentVeryDissatisfiedIcon fontSize="large" />
                <p className="no-resumes-text">
                  You do not have any Resumes yet. Make One to view it here.
                </p>
              </div>
            )}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyResumes);
