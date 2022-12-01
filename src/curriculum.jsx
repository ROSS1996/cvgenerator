import React from "react";
import "./curriculum.css";

import Experience from "./components/experience";
import Graduations from "./components/education";
import Courses from "./components/courses";

import {
  SocialMedias,
  KeySkills,
  TechSkills,
  Languages,
} from "./components/other";

function Curriculum (props) {

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
        <section id="experiencesSection">
          <div className="section">
            <h3>Experience</h3>
          </div>
          <ul id="experienceList">
            <Experience jobHistory={props.userXP}/>
          </ul>
        </section>
        <section id="educationSection">
          <div className="section">
            <h3>Education</h3>
          </div>
          <ul id="education">
            <Graduations gradList={props.userGRAD}/>
          </ul>
        </section>
        <section id="coursesSection">
          <div className="section">
            <h3>Courses</h3>
          </div>
          <ul id="courses">
            <Courses coursesList={props.userCourses}/>
          </ul>
        </section>
      </section>
      <section id="info">
        <section id="personalData">
          <div className="sectionTwo">
            <h3>Personal Data</h3>
          </div>
          <div>
            <h4>Address</h4>
            <p id="address">{props.userProfile.address}</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>{props.userProfile.phone}</p>
          </div>
          <div>
            <h4>Email</h4>
            <a href={"mailto://" + props.userProfile.email}>
              {" "}
              <p>{props.userProfile.email}</p>{" "}
            </a>
          </div>
        </section>
        <section id="socialmedia">
          <h3 className="section">Social Media</h3>
          <ul>
            <SocialMedias medias={props.userSM}/>
          </ul>
        </section>
        <section id="keySkills">
          <div className="section">
            <h3>Key Skills</h3>
          </div>
          <ul>
            <KeySkills skillsList={props.userKS}/>
          </ul>
        </section>
        <section id="techSkills">
          <h3 className="section">Technical Skills</h3>
          <ul>
            <TechSkills skillsList={props.userTS}/>
          </ul>
        </section>
        <section id="languages">
          <div className="section">
            <h3>Languages</h3>
          </div>
          <ul>
            <li>
              <h4>{props.userProfile.firstLanguage}</h4>
              <p>Native</p>
            </li>
            <Languages languagesList={props.userLanguages}/>
          </ul>
        </section>
      </section>
    </div>
  );

}

export default Curriculum