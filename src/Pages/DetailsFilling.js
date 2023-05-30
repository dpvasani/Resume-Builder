import React, { useState } from "react";
import {
  Navbar,
  DetailFillingSidebar,
  EducationComponent,
  KeySkillsComponent,
  PersonalInfoComponent,
  PreviewComponent,
  WorkExperienceComponent,
} from "./";
import "./Styles/DetailsFilling.css";

// As soon as details are filled for particular categories/sections browser moves further to next fields if ! then same field on same page

const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <DetailFillingSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInfoComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <KeySkillsComponent setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <WorkExperienceComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <EducationComponent setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <PreviewComponent setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
