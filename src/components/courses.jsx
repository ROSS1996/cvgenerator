import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";

function Courses(props) {
  const [coursesList, setCourses] = useState([
    {
      date: "2014/05",
      courseName: "ITL Foundation v2",
      institution: "Texas A&M University",
    },
    {
      date: "2013/12",
      courseName: "ITL Foundation v3",
      institution: "Texas A&M University",
    },
    {
      date: "2011/07",
      courseName: "Lean It Foundation",
      institution: "Texas A&M University",
    },
  ]);

  const myCourses = coursesList.map((item) => (
    <li key={uniqueKey()} className="coursesItem">
      <h4>{item.date}</h4>
      <p>{item.courseName}</p> / <p>{item.institution}</p>
    </li>
  ));
  return <>{myCourses} </>;
}

export default Courses;
