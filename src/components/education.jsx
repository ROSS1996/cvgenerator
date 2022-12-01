import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";

function Graduations(props) {
  const [graduationsList, setCourses] = useState([
    {
      dateStarted: "2002/09",
      dateFinished: "2005/06",
      courseName: "Management and Information System",
      degree: "Masters",
      institution: "Texas A&M University",
    },
    {
      dateStarted: "1997/09",
      dateFinished: "2001/05",
      courseName: "Computer Science and Databases",
      degree: "Bachelor",
      institution: "Texas A&M University",
    },
  ]);

  const myGraduations = graduationsList.map((item) => (
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

export default Graduations;
