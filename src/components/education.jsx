import React from "react";

function Graduations(props) {
  const myGraduations = props.gradList.map((item) => (
    <li key={item.id} id={item.id} className="educationItem">
      <div className="period">
        <h4 className="start">{item.dateStarted}</h4>
        <h4 className="finish">{item.dateFinished}</h4>
      </div>
      <div className="courseInfo">
        <h4 className="course">{item.courseName}</h4>
        <p>
          <span className="degree">{item.degree}</span> /{" "}
          <span className="institution">{item.institution}</span>
        </p>
      </div>
    </li>
  ));
  return (
    <section id="educationSection">
      <div className="section" id="educationNode">
        <h3>Education</h3>
      </div>
      <ul id="education">{myGraduations}</ul>
    </section>
  );
}

export default Graduations;
