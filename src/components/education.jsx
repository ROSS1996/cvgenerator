import React from "react";
import { v4 as uniqueKey } from "uuid";

function Courses(props) {
  const myGraduations = props.listOf.map((item) => (
    <li key={uniqueKey()} className="educationItem">
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
  return <>{myGraduations} </>;
}

export default Courses;
