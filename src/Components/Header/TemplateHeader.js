import React from "react";
import "./TemplateHeader.css";

const TemplateHeader = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <div className="template-header">
        <div className="template-header-first">
          {props.personalInfo.profileImg.length > 0 ? (
            <div className="template-img-cont">
              <img
                className="template-profile-img"
                src={props.personalInfo.profileImg}
                alt="profile-img"
              />
            </div>
          ) : (
            <div
              style={{ backgroundColor: props.primaryColor }}
              className="template-img-cont">
              <p style={{ color: props.bgColor }} className="template-img-text">
                AM
              </p>
            </div>
          )}
          <div className="template-user-details-cont">
            <h2
              style={{ color: props.primaryColor }}
              className="template-user-name">
              {props.personalInfo.firstName + " " + props.personalInfo.lastName}
            </h2>
            <p
              style={{ color: props.secondaryColor }}
              className="template-user-designation">
              {props.workExperience[0].jobTitle}
            </p>
          </div>
        </div>
        <p
          style={{ color: props.primaryColor }}
          className="template-header-second">
          {props.personalInfo.address}<br/>
          {props.personalInfo.city} &nbsp;
          {props.personalInfo.country} &nbsp;
          {props.personalInfo.postalCode}<br/>
          {props.personalInfo.mobile}<br/>
        </p>
      </div>
      <p
        style={{ color: props.secondaryColor }}
        className="template-user-about">
        {props.personalInfo.objective}
      </p>
    </div>
  );
};

export default TemplateHeader;
