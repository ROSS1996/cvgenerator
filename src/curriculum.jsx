import React from "react";
import "./curriculum.css";


import Experience from "./components/experience";
import Graduations from "./components/education";
import Courses from "./components/courses";

import {
  ContactData,
  SocialMedias,
  KeySkills,
  TechSkills,
  Languages,
} from "./components/personal";

function Curriculum(props) {
  return (
    <div id="curriculum">
      <div id="header">
        <div>
          <h1 id="personName">{props.userProfile.fullName}</h1>
          <h2 id="personRole">{props.userProfile.role}</h2>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="Candidate Portrait"
          className="photo"
          id="personPhoto"
        />
      </div>
      <section id="career">
        <p id="personResume">{props.userProfile.about}</p>
        <Experience jobHistory={props.userXP} />
        <Graduations gradList={props.userGRAD} />
        <Courses coursesList={props.userCourses} />
      </section>
      <section id="info">
        <ContactData
          address={props.userProfile.address}
          phone={props.userProfile.phone}
          email={props.userProfile.email}
        />
        <SocialMedias medias={props.userSM} />
        <KeySkills skillsList={props.userKS} />
        <TechSkills skillsList={props.userTS} />
        <Languages
          native={props.userProfile.firstLanguage}
          languagesList={props.userLanguages}
        />
      </section>
    </div>
  );
}

export default Curriculum;
